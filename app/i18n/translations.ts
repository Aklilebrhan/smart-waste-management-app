export const translations={
 en:{welcome:'Good morning, Amina',subtitle:'Your neighborhood is 14 kg cleaner this month.',request:'Request collection',track:'Track collection',active:'Active collection',nearby:'Nearby service',impact:'Your impact',jobs:'Open jobs',operations:'Operations',language:'Language',settings:'Settings',earnings:'Earnings',analytics:'Analytics',submit:'Submit request',location:'Pickup location',waste:'Waste type',photos:'Add photos',all:'All systems normal'},
 am:{welcome:'እንደምን አደሩ፣ አሚና',subtitle:'ሰፈርዎ በዚህ ወር 14 ኪ.ግ የበለጠ ንጹህ ነው።',request:'ማሰባሰብ ይጠይቁ',track:'ስብሰባን ይከታተሉ',active:'በሂደት ላይ ያለ ስብሰባ',nearby:'ቅርብ አገልግሎት',impact:'የእርስዎ ተፅዕኖ',jobs:'ክፍት ስራዎች',operations:'ኦፕሬሽኖች',language:'ቋንቋ',settings:'ቅንብሮች',earnings:'ገቢ',analytics:'ትንታኔ',submit:'ጥያቄ ያስገቡ',location:'የመውሰጃ ቦታ',waste:'የቆሻሻ አይነት',photos:'ፎቶዎች ይጨምሩ',all:'ሁሉም ስርዓቶች መደበኛ ናቸው'}
} as const;
export type Language=keyof typeof translations;
