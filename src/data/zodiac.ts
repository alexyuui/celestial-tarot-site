export interface ZodiacSign {
  slug: string;
  name: string;
  symbol: string;
  dates: string;
  element: string;
  ruling: string;
  description: string;
  youtubeId?: string;
}

export const signs: ZodiacSign[] = [
  { slug: 'aries', name: 'Aries', symbol: '♈', dates: 'Mar 21 – Apr 19', element: 'Fire', ruling: 'Mars', description: 'Bold, ambitious, and courageous — Aries charges forward with unstoppable energy. As the first sign of the zodiac, you are a natural-born leader driven by passion and determination.', youtubeId: '' },
  { slug: 'taurus', name: 'Taurus', symbol: '♉', dates: 'Apr 20 – May 20', element: 'Earth', ruling: 'Venus', description: 'Grounded, sensual, and steadfast — Taurus finds strength in stability. Your connection to the material world brings beauty, comfort, and unwavering loyalty to those you love.' },
  { slug: 'gemini', name: 'Gemini', symbol: '♊', dates: 'May 21 – Jun 20', element: 'Air', ruling: 'Mercury', description: 'Curious, adaptable, and endlessly communicative — Gemini dances between worlds. Your dual nature gifts you with versatility and a brilliant, restless mind.' },
  { slug: 'cancer', name: 'Cancer', symbol: '♋', dates: 'Jun 21 – Jul 22', element: 'Water', ruling: 'Moon', description: 'Intuitive, nurturing, and deeply emotional — Cancer carries the wisdom of the tides. Your protective shell hides a heart of profound compassion and psychic sensitivity.' },
  { slug: 'leo', name: 'Leo', symbol: '♌', dates: 'Jul 23 – Aug 22', element: 'Fire', ruling: 'Sun', description: 'Radiant, dramatic, and magnetically confident — Leo commands every stage. Your solar energy inspires others and your generous heart shines brightest in the spotlight.' },
  { slug: 'virgo', name: 'Virgo', symbol: '♍', dates: 'Aug 23 – Sep 22', element: 'Earth', ruling: 'Mercury', description: 'Analytical, devoted, and gracefully precise — Virgo sees what others miss. Your healing nature and attention to detail make you the quiet architect of perfection.' },
  { slug: 'libra', name: 'Libra', symbol: '♎', dates: 'Sep 23 – Oct 22', element: 'Air', ruling: 'Venus', description: 'Harmonious, diplomatic, and aesthetically gifted — Libra seeks balance in all things. Your innate sense of justice and beauty creates peace wherever you go.' },
  { slug: 'scorpio', name: 'Scorpio', symbol: '♏', dates: 'Oct 23 – Nov 21', element: 'Water', ruling: 'Pluto', description: 'Intense, transformative, and magnetically powerful — Scorpio plunges into the depths. Your ability to see through illusions and embrace shadow makes you a force of rebirth.' },
  { slug: 'sagittarius', name: 'Sagittarius', symbol: '♐', dates: 'Nov 22 – Dec 21', element: 'Fire', ruling: 'Jupiter', description: 'Adventurous, philosophical, and boundlessly optimistic — Sagittarius aims for the stars. Your quest for truth and freedom takes you on journeys both physical and spiritual.' },
  { slug: 'capricorn', name: 'Capricorn', symbol: '♑', dates: 'Dec 22 – Jan 19', element: 'Earth', ruling: 'Saturn', description: 'Disciplined, ambitious, and wisely patient — Capricorn climbs the mountain of mastery. Your determination and strategic mind build empires that stand the test of time.' },
  { slug: 'aquarius', name: 'Aquarius', symbol: '♒', dates: 'Jan 20 – Feb 18', element: 'Air', ruling: 'Uranus', description: 'Visionary, humanitarian, and brilliantly unconventional — Aquarius rewrites the rules. Your innovative spirit and concern for collective evolution make you the water-bearer of change.' },
  { slug: 'pisces', name: 'Pisces', symbol: '♓', dates: 'Feb 19 – Mar 20', element: 'Water', ruling: 'Neptune', description: 'Dreamy, empathic, and boundlessly creative — Pisces swims between worlds. Your deep spiritual connection and artistic soul channel the infinite mysteries of the cosmos.' },
];
