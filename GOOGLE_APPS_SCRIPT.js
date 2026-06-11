const SHEET_ID = '1mem5wHaUBBtyJuS_fmevhPkZVxqRiWImH3mzenG8JZk'; // Prefilled with your Google Sheet ID
const SHEET_NAME = 'Sheet1'; // Name of the sheet tab

function doPost(e) {
  try {
    // Parse incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Open the sheet
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);
    
    // Generate timestamp in IST
    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istTime = new Date(now.getTime() + istOffset);
    const timestamp = Utilities.formatDate(istTime, 'Asia/Kolkata', 'dd/MM/yyyy HH:mm:ss');
    
    // Append row — order must match your header columns exactly
    sheet.appendRow([
      timestamp,                                    // A: Timestamp
      data.fullName || '',                          // B: Full Name
      data.email || '',                             // C: Email
      data.phone || '',                             // D: Phone
      data.whatsapp || data.phone || '',            // E: WhatsApp (fallback to phone)
      data.tourName || '',                          // F: Tour Name
      data.tourSlug || '',                          // G: Tour Slug
      data.departureDate || '',                     // H: Departure Date
      data.returnDate || '',                        // I: Return Date
      data.adults || 1,                             // J: Adults
      data.children || 0,                           // K: Children
      data.accommodation || 'Standard',             // L: Accommodation
      data.specialRequirements || 'None',           // M: Special Requirements
      data.hearAboutUs || '',                       // N: How Heard
      data.budget || '',                            // O: Budget
      'New',                                        // P: Status (default)
      data.sourcePage || '/book',                   // Q: Source Page
      data.ipAddress || 'Unknown',                  // R: IP Address
    ]);
    
    // Send confirmation email to Rajbir
    sendConfirmationEmail(data);
    
    // Return success
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Booking received successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error
    console.error('Booking submission error:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.message 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendConfirmationEmail(data) {
  try {
    const adminEmail = 'waterting.app@gmail.com'; // Admin notification email
    
    const subject = `🏔️ New Booking: ${data.tourName} — ${data.fullName}`;
    
    const body = `
Namaskar Rajbir Ji,

Ek nayi booking aai hai website se!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BOOKING DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tourist Name : ${data.fullName}
Phone        : ${data.phone}
WhatsApp     : ${data.whatsapp || data.phone}
Email        : ${data.email}
Tour         : ${data.tourName}
Departure    : ${data.departureDate}
Return       : ${data.returnDate}
Adults       : ${data.adults}
Children     : ${data.children || 0}
Accommodation: ${data.accommodation}
Budget       : ${data.budget || 'Not specified'}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Special Requirements:
${data.specialRequirements || 'None'}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
How they heard about us: ${data.hearAboutUs}
Source Page: ${data.sourcePage}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

View all bookings: https://docs.google.com/spreadsheets/d/${SHEET_ID}

Baspa Tour Center Travels
Powered by Waterting Solutions
    `;
    
    MailApp.sendEmail(adminEmail, subject, body);
  } catch (e) {
    console.error('Email send failed:', e);
  }
}

// Test function — run this manually to verify sheet connection
function testConnection() {
  const testData = {
    fullName: 'Test User',
    email: 'test@test.com',
    phone: '9418701460',
    tourName: 'Spiti Summer Circuit',
    tourSlug: 'spiti-summer-circuit',
    departureDate: '15 June 2025',
    returnDate: '22 June 2025',
    adults: 2,
    children: 0,
    accommodation: 'Deluxe',
    specialRequirements: 'Vegetarian food only',
    hearAboutUs: 'Google Search',
    budget: '50000',
    sourcePage: '/tours/spiti-summer-circuit',
  };
  
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME);
  
  const now = new Date();
  const timestamp = Utilities.formatDate(now, 'Asia/Kolkata', 'dd/MM/yyyy HH:mm:ss');
  
  sheet.appendRow([
    timestamp + ' [TEST]',
    testData.fullName,
    testData.email,
    testData.phone,
    testData.phone,
    testData.tourName,
    testData.tourSlug,
    testData.departureDate,
    testData.returnDate,
    testData.adults,
    testData.children,
    testData.accommodation,
    testData.specialRequirements,
    testData.hearAboutUs,
    testData.budget,
    'Test',
    testData.sourcePage,
    'Test IP',
  ]);
  
  Logger.log('Test row added successfully!');
}
