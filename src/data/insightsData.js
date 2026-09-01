export const insightsData = {
  national: {
    stateId: "ALL",
    name: "All India (National Overview)",
    totalPopulation: "1,428.6 M",
    totalPopulationRaw: 1428.6,
    literacyRate: "77.7%",
    urbanPopulation: "36.2%",
    ruralPopulation: "63.8%",
    urbanPopNumber: "517.1 M",
    ruralPopNumber: "911.5 M",
    sexRatio: "948",
    digitalAccessRate: "83.4%",
    ageCohorts: [
      { age: "0-14 Yrs", male: 198.4, female: 181.2, total: 379.6 },
      { age: "15-29 Yrs", male: 195.8, female: 184.6, total: 380.4 },
      { age: "30-44 Yrs", male: 172.5, female: 164.2, total: 336.7 },
      { age: "45-59 Yrs", male: 104.2, female: 99.8, total: 204.0 },
      { age: "60+ Yrs", male: 62.4, female: 65.5, total: 127.9 }
    ],
    urbanRuralSplit: [
      { name: "Urban Population", value: 36.2, color: "#1A56DB", count: "517.1 Million" },
      { name: "Rural Population", value: 63.8, color: "#059669", count: "911.5 Million" }
    ],
    decadalGrowth: [
      { year: "1981", population: 683.3, literacy: 43.6, digital: 0.0 },
      { year: "1991", population: 846.4, literacy: 52.2, digital: 0.0 },
      { year: "2001", population: 1028.7, literacy: 64.8, digital: 2.1 },
      { year: "2011", population: 1210.8, literacy: 74.0, digital: 10.4 },
      { year: "2021 (Est)", population: 1380.0, literacy: 77.0, digital: 61.2 },
      { year: "2027 (Proj)", population: 1428.6, literacy: 82.5, digital: 83.4 }
    ]
  },
  states: {
    MH: {
      name: "Maharashtra",
      totalPopulation: "126.4 M",
      totalPopulationRaw: 126.4,
      literacyRate: "84.8%",
      urbanPopulation: "45.2%",
      ruralPopulation: "54.8%",
      urbanPopNumber: "57.1 M",
      ruralPopNumber: "69.3 M",
      sexRatio: "929",
      digitalAccessRate: "88.4%",
      ageCohorts: [
        { age: "0-14 Yrs", male: 16.2, female: 14.8, total: 31.0 },
        { age: "15-29 Yrs", male: 17.5, female: 16.1, total: 33.6 },
        { age: "30-44 Yrs", male: 15.9, female: 14.7, total: 30.6 },
        { age: "45-59 Yrs", male: 10.1, female: 9.6, total: 19.7 },
        { age: "60+ Yrs", male: 5.7, female: 5.8, total: 11.5 }
      ],
      urbanRuralSplit: [
        { name: "Urban Population", value: 45.2, color: "#1A56DB", count: "57.1 Million" },
        { name: "Rural Population", value: 54.8, color: "#059669", count: "69.3 Million" }
      ],
      decadalGrowth: [
        { year: "1981", population: 62.8, literacy: 55.8, digital: 0.0 },
        { year: "1991", population: 78.9, literacy: 64.9, digital: 0.0 },
        { year: "2001", population: 96.9, literacy: 76.9, digital: 4.2 },
        { year: "2011", population: 112.4, literacy: 82.3, digital: 18.5 },
        { year: "2021 (Est)", population: 123.1, literacy: 84.0, digital: 72.3 },
        { year: "2027 (Proj)", population: 126.4, literacy: 88.5, digital: 88.4 }
      ]
    },
    KA: {
      name: "Karnataka",
      totalPopulation: "68.2 M",
      totalPopulationRaw: 68.2,
      literacyRate: "82.9%",
      urbanPopulation: "38.6%",
      ruralPopulation: "61.4%",
      urbanPopNumber: "26.3 M",
      ruralPopNumber: "41.9 M",
      sexRatio: "973",
      digitalAccessRate: "92.1%",
      ageCohorts: [
        { age: "0-14 Yrs", male: 8.8, female: 8.2, total: 17.0 },
        { age: "15-29 Yrs", male: 9.6, female: 9.1, total: 18.7 },
        { age: "30-44 Yrs", male: 8.4, female: 8.0, total: 16.4 },
        { age: "45-59 Yrs", male: 5.1, female: 4.9, total: 10.0 },
        { age: "60+ Yrs", male: 3.0, female: 3.1, total: 6.1 }
      ],
      urbanRuralSplit: [
        { name: "Urban Population", value: 38.6, color: "#1A56DB", count: "26.3 Million" },
        { name: "Rural Population", value: 61.4, color: "#059669", count: "41.9 Million" }
      ],
      decadalGrowth: [
        { year: "1981", population: 37.1, literacy: 46.2, digital: 0.0 },
        { year: "1991", population: 45.0, literacy: 56.0, digital: 0.0 },
        { year: "2001", population: 52.9, literacy: 66.6, digital: 5.1 },
        { year: "2011", population: 61.1, literacy: 75.4, digital: 22.0 },
        { year: "2021 (Est)", population: 66.5, literacy: 81.2, digital: 78.4 },
        { year: "2027 (Proj)", population: 68.2, literacy: 86.8, digital: 92.1 }
      ]
    },
    GJ: {
      name: "Gujarat",
      totalPopulation: "71.5 M",
      totalPopulationRaw: 71.5,
      literacyRate: "83.1%",
      urbanPopulation: "42.6%",
      ruralPopulation: "57.4%",
      urbanPopNumber: "30.5 M",
      ruralPopNumber: "41.0 M",
      sexRatio: "919",
      digitalAccessRate: "86.7%",
      ageCohorts: [
        { age: "0-14 Yrs", male: 9.7, female: 8.8, total: 18.5 },
        { age: "15-29 Yrs", male: 10.4, female: 9.5, total: 19.9 },
        { age: "30-44 Yrs", male: 8.9, female: 8.3, total: 17.2 },
        { age: "45-59 Yrs", male: 5.3, female: 4.9, total: 10.2 },
        { age: "60+ Yrs", male: 2.8, female: 2.9, total: 5.7 }
      ],
      urbanRuralSplit: [
        { name: "Urban Population", value: 42.6, color: "#1A56DB", count: "30.5 Million" },
        { name: "Rural Population", value: 57.4, color: "#059669", count: "41.0 Million" }
      ],
      decadalGrowth: [
        { year: "1981", population: 34.1, literacy: 52.2, digital: 0.0 },
        { year: "1991", population: 41.3, literacy: 61.3, digital: 0.0 },
        { year: "2001", population: 50.7, literacy: 69.1, digital: 3.8 },
        { year: "2011", population: 60.4, literacy: 78.0, digital: 17.2 },
        { year: "2021 (Est)", population: 69.1, literacy: 81.8, digital: 71.5 },
        { year: "2027 (Proj)", population: 71.5, literacy: 87.0, digital: 86.7 }
      ]
    },
    TN: {
      name: "Tamil Nadu",
      totalPopulation: "76.8 M",
      totalPopulationRaw: 76.8,
      literacyRate: "87.2%",
      urbanPopulation: "48.4%",
      ruralPopulation: "51.6%",
      urbanPopNumber: "37.2 M",
      ruralPopNumber: "39.6 M",
      sexRatio: "996",
      digitalAccessRate: "89.5%",
      ageCohorts: [
        { age: "0-14 Yrs", male: 8.9, female: 8.5, total: 17.4 },
        { age: "15-29 Yrs", male: 9.8, female: 9.6, total: 19.4 },
        { age: "30-44 Yrs", male: 9.4, female: 9.3, total: 18.7 },
        { age: "45-59 Yrs", male: 6.2, female: 6.3, total: 12.5 },
        { age: "60+ Yrs", male: 4.3, female: 4.5, total: 8.8 }
      ],
      urbanRuralSplit: [
        { name: "Urban Population", value: 48.4, color: "#1A56DB", count: "37.2 Million" },
        { name: "Rural Population", value: 51.6, color: "#059669", count: "39.6 Million" }
      ],
      decadalGrowth: [
        { year: "1981", population: 48.4, literacy: 54.4, digital: 0.0 },
        { year: "1991", population: 55.9, literacy: 62.7, digital: 0.0 },
        { year: "2001", population: 62.4, literacy: 73.5, digital: 4.5 },
        { year: "2011", population: 72.1, literacy: 80.1, digital: 21.0 },
        { year: "2021 (Est)", population: 75.6, literacy: 85.0, digital: 76.8 },
        { year: "2027 (Proj)", population: 76.8, literacy: 90.2, digital: 89.5 }
      ]
    },
    DL: {
      name: "Delhi (NCT)",
      totalPopulation: "21.8 M",
      totalPopulationRaw: 21.8,
      literacyRate: "89.6%",
      urbanPopulation: "97.5%",
      ruralPopulation: "2.5%",
      urbanPopNumber: "21.3 M",
      ruralPopNumber: "0.5 M",
      sexRatio: "868",
      digitalAccessRate: "96.2%",
      ageCohorts: [
        { age: "0-14 Yrs", male: 2.7, female: 2.4, total: 5.1 },
        { age: "15-29 Yrs", male: 3.4, female: 2.9, total: 6.3 },
        { age: "30-44 Yrs", male: 3.0, female: 2.6, total: 5.6 },
        { age: "45-59 Yrs", male: 1.7, female: 1.5, total: 3.2 },
        { age: "60+ Yrs", male: 0.8, female: 0.8, total: 1.6 }
      ],
      urbanRuralSplit: [
        { name: "Urban Population", value: 97.5, color: "#1A56DB", count: "21.3 Million" },
        { name: "Rural Population", value: 2.5, color: "#059669", count: "0.5 Million" }
      ],
      decadalGrowth: [
        { year: "1981", population: 6.2, literacy: 68.4, digital: 0.0 },
        { year: "1991", population: 9.4, literacy: 75.3, digital: 0.0 },
        { year: "2001", population: 13.9, literacy: 81.7, digital: 11.2 },
        { year: "2011", population: 16.8, literacy: 86.2, digital: 38.6 },
        { year: "2021 (Est)", population: 20.4, literacy: 88.5, digital: 89.1 },
        { year: "2027 (Proj)", population: 21.8, literacy: 92.4, digital: 96.2 }
      ]
    },
    UP: {
      name: "Uttar Pradesh",
      totalPopulation: "241.0 M",
      totalPopulationRaw: 241.0,
      literacyRate: "73.2%",
      urbanPopulation: "22.3%",
      ruralPopulation: "77.7%",
      urbanPopNumber: "53.7 M",
      ruralPopNumber: "187.3 M",
      sexRatio: "912",
      digitalAccessRate: "74.8%",
      ageCohorts: [
        { age: "0-14 Yrs", male: 36.5, female: 33.1, total: 69.6 },
        { age: "15-29 Yrs", male: 34.2, female: 31.8, total: 66.0 },
        { age: "30-44 Yrs", male: 27.5, female: 25.4, total: 52.9 },
        { age: "45-59 Yrs", male: 16.8, female: 15.6, total: 32.4 },
        { age: "60+ Yrs", male: 10.2, female: 9.9, total: 20.1 }
      ],
      urbanRuralSplit: [
        { name: "Urban Population", value: 22.3, color: "#1A56DB", count: "53.7 Million" },
        { name: "Rural Population", value: 77.7, color: "#059669", count: "187.3 Million" }
      ],
      decadalGrowth: [
        { year: "1981", population: 110.9, literacy: 32.7, digital: 0.0 },
        { year: "1991", population: 139.1, literacy: 40.7, digital: 0.0 },
        { year: "2001", population: 166.2, literacy: 56.3, digital: 1.2 },
        { year: "2011", population: 199.8, literacy: 67.7, digital: 7.8 },
        { year: "2021 (Est)", population: 231.5, literacy: 71.0, digital: 52.6 },
        { year: "2027 (Proj)", population: 241.0, literacy: 78.4, digital: 74.8 }
      ]
    }
  },

  // State population comparison dataset for Bar Chart
  stateComparisonBarData: [
    { state: "Uttar Pradesh", population: 241.0, literacy: 73.2, urbanPct: 22.3 },
    { state: "Maharashtra", population: 126.4, literacy: 84.8, urbanPct: 45.2 },
    { state: "Bihar", population: 128.5, literacy: 69.8, urbanPct: 13.1 },
    { state: "West Bengal", population: 98.2, literacy: 79.4, urbanPct: 31.9 },
    { state: "Madhya Pradesh", population: 86.5, literacy: 74.5, urbanPct: 27.6 },
    { state: "Tamil Nadu", population: 76.8, literacy: 87.2, urbanPct: 48.4 },
    { state: "Rajasthan", population: 81.2, literacy: 71.1, urbanPct: 24.9 },
    { state: "Gujarat", population: 71.5, literacy: 83.1, urbanPct: 42.6 },
    { state: "Karnataka", population: 68.2, literacy: 82.9, urbanPct: 38.6 },
    { state: "Delhi (NCT)", population: 21.8, literacy: 89.6, urbanPct: 97.5 }
  ]
};
