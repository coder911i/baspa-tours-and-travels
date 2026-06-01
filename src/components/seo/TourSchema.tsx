import React from 'react';
import { Tour } from '@/types';

export default function TourSchema({ tour }: { tour: Tour }) {
  const displayPrice = typeof tour.price === 'number' ? tour.price : tour.price.perPerson;
  const departurePoint = tour.routeStops?.[0]?.label || 'Delhi';
  const bestTime = tour.season ? tour.season.join(', ') : (tour.slug.includes('winter') ? 'December to March' : 'May to October');

  // TourPackage schema
  const tourSchema = {
    "@context": "https://schema.org",
    "@type": "TourPackage",
    "name": tour.title,
    "description": tour.description,
    "url": `https://www.baspatravels.com/tours/${tour.slug}`,
    "provider": {
      "@type": "TravelAgency",
      "name": "Baspa Tour Center Travels",
      "url": "https://www.baspatravels.com",
      "telephone": "+91-XXXXXXXXXX",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chitkul",
        "addressRegion": "Himachal Pradesh",
        "addressCountry": "IN"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": displayPrice,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "touristType": "Adventure travelers",
    "itinerary": tour.itinerary.map(day => ({
      "@type": "TouristDestination",
      "name": day.title,
      "description": day.description
    }))
  };

  // FAQPage schema with exactly 5 questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is included in ${tour.title}?`,
        "acceptedAnswer": { 
          "@type": "Answer", 
          "text": tour.inclusions.join(', ') 
        }
      },
      {
        "@type": "Question",
        "name": `What is the best time for ${tour.title}?`,
        "acceptedAnswer": { 
          "@type": "Answer", 
          "text": bestTime 
        }
      },
      {
        "@type": "Question",
        "name": "What is the starting price?",
        "acceptedAnswer": { 
          "@type": "Answer", 
          "text": `Starting from ₹${displayPrice.toLocaleString()} per person` 
        }
      },
      {
        "@type": "Question",
        "name": "Where does the tour depart from?",
        "acceptedAnswer": { 
          "@type": "Answer", 
          "text": departurePoint 
        }
      },
      {
        "@type": "Question",
        "name": `How many days is ${tour.title}?`,
        "acceptedAnswer": { 
          "@type": "Answer", 
          "text": tour.duration 
        }
      }
    ]
  };

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.baspatravels.com" },
      { "@type": "ListItem", "position": 2, "name": "Tours", "item": "https://www.baspatravels.com/tours" },
      { "@type": "ListItem", "position": 3, "name": tour.title, "item": `https://www.baspatravels.com/tours/${tour.slug}` }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
