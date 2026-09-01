export const censusPhasesData = {
  phase1: {
    id: "phase1",
    code: "HLH-2027",
    title: "Phase 1: House Listing & Housing Census",
    titleHi: "चरण 1: मकान सूचीकरण एवं आवास जनगणना",
    titleMr: "टप्पा 1: घरांची यादी व गृहनिर्माण जनगणना",
    tagline: "Cataloging Living Conditions, Amenities & Structural Assets",
    duration: "April 2027 – September 2027 (State-Specific Windows)",
    color: "#FF7722",
    iconName: "Home",
    badge: "Stage 1 of 2",
    description: "The primary objective of House Listing is to locate, number, and systematically catalog every building, census house, and household in the country. It assesses the living conditions, basic amenities, and infrastructure available to households.",
    keyCategories: [
      {
        title: "Building & Structure Characteristics",
        details: "Building number, purpose of census house (residential, commercial, workshop, mixed), structural condition (good, livable, dilapidated), and major materials used in roof, wall, and floor."
      },
      {
        title: "Household Living Space",
        details: "Total number of dwelling rooms exclusively occupied by the household, whether the household owns the house or lives in rented/other accommodation."
      },
      {
        title: "Water & Sanitation Facilities",
        details: "Main source of drinking water (tap, handpump, tubewell, well), location of drinking water source (within premises, near, away), and type of latrine facility inside or outside premises."
      },
      {
        title: "Power, Energy & Cooking Amenities",
        details: "Main source of lighting (electricity, solar, kerosene), availability of kitchen facility, and type of cooking fuel primarily used (LPG/PNG piped gas, biogas, firewood, induction)."
      },
      {
        title: "Digital & Household Assets",
        details: "Availability of internet connectivity, computer/laptop, television, four-wheeler/two-wheeler, and mobile phone/smartphone."
      }
    ],
    sampleQuestions: [
      { q: "Q1. What is the predominant material of roof, wall, and floor of this census house?", tip: "Categorized as Pucca (concrete/stone), Semi-Pucca, or Kutcha (thatch/mud)." },
      { q: "Q2. What is the ownership status of this household?", tip: "Options: Owned, Rented, Any other." },
      { q: "Q3. How many married couples live in this household?", tip: "Assesses space overcrowding and family structure." },
      { q: "Q4. Does this household have access to an internet connection?", tip: "Tracks digital connectivity progression across rural & urban India." },
      { q: "Q5. What is the primary source of cooking fuel?", tip: "Helps monitor clean energy programs like PM Ujjwala Yojana." }
    ]
  },
  phase2: {
    id: "phase2",
    code: "PE-2028",
    title: "Phase 2: Population Enumeration",
    titleHi: "चरण 2: जनसंख्या गणना",
    titleMr: "टप्पा 2: लोकसंख्या गणना",
    tagline: "Headcount & Comprehensive Socio-Demographic Mapping",
    duration: "February 2028 – March 2028 (Synchronous Nationwide Count)",
    color: "#1A56DB",
    iconName: "Users",
    badge: "Stage 2 of 2",
    description: "Population Enumeration is the core exercise where every individual person residing in the country (including infants, homeless, and institutional populations) is counted at their usual place of residence with full demographic, economic, and cultural profiles.",
    keyCategories: [
      {
        title: "Individual Demographics",
        details: "Full legal name, relationship to head of household, sex (Male, Female, Transgender), date of birth, completed age in years, and current marital status."
      },
      {
        title: "Religion & Social Category",
        details: "Declared religion, Scheduled Caste (SC) or Scheduled Tribe (ST) status as recognized by presidential orders."
      },
      {
        title: "Disability & Special Needs",
        details: "Types of disabilities if any (locomotor, visual, hearing, speech, intellectual, mental illness, multiple disabilities) to aid public welfare planning."
      },
      {
        title: "Mother Tongue & Multilingualism",
        details: "Mother tongue and up to two other secondary languages known and spoken fluently."
      },
      {
        title: "Education & Literacy Status",
        details: "Literacy in any language, highest educational qualification completed (technical, diploma, graduate, postgraduate, doctorate), and current educational institution enrollment."
      },
      {
        title: "Economic Activity & Occupation",
        details: "Work status in the preceding 12 months (Main worker, Marginal worker, Non-worker), nature of economic activity, industry/trade, and status as employer, employee, or self-employed."
      }
    ],
    sampleQuestions: [
      { q: "Q1. What is the individual's full name and relation to the head of household?", tip: "Head of household is chosen by the family members themselves." },
      { q: "Q2. What is the date of birth and completed age in completed years?", tip: "Self-enumeration portal cross-checks birth year consistency." },
      { q: "Q3. What is the highest educational level completed?", tip: "From primary school to technical doctorates." },
      { q: "Q4. Was the person engaged in any economic work in the last 12 months?", tip: "Includes seasonal agricultural labor, gig work, and small businesses." },
      { q: "Q5. What was the reason for migration to the present residence?", tip: "Options: Work/Employment, Business, Education, Marriage, Moved with household, etc." }
    ]
  }
};
