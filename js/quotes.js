/* ============================================================
   ALI MUSHKIL KUSHA — Quotes / Aqwal-e-Zareen Database
   Daily Quote Rotation System
   ============================================================ */

const aqwalEZareen = [
  {
    arabic: "اَلصَّبْرُ مِفْتَاحُ الْفَرَجِ",
    english: "Patience is the key to relief.",
    urdu: "صبر فرج کی کنجی ہے۔",
    category: "Patience"
  },
  {
    arabic: "اَلْقَنَاعَةُ مَالٌ لَا يَنْفَدُ",
    english: "Contentment is a wealth that does not diminish.",
    urdu: "قناعت ایسی دولت ہے جو کبھی ختم نہیں ہوتی۔",
    category: "Contentment"
  },
  {
    arabic: "اَلْعِلْمُ خَيْرٌ مِنَ الْمَالِ",
    english: "Knowledge is better than wealth, for knowledge guards you while you guard wealth.",
    urdu: "علم مال سے بہتر ہے، کیونکہ علم تمہاری حفاظت کرتا ہے جبکہ تم مال کی حفاظت کرتے ہو۔",
    category: "Knowledge"
  },
  {
    arabic: "",
    english: "Do not let your difficulties fill you with anxiety; after all, it is only in the darkest nights that stars shine more brightly.",
    urdu: "اپنی مشکلات کو پریشانی سے مت بھرو؛ سب سے اندھیری راتوں میں ہی ستارے زیادہ روشن چمکتے ہیں۔",
    category: "Hope"
  },
  {
    arabic: "",
    english: "The sin that makes you sad is better in the sight of God than the good deed that makes you proud.",
    urdu: "وہ گناہ جو تمہیں غمگین کرے خدا کی نظر میں اس نیکی سے بہتر ہے جو تمہیں مغرور کرے۔",
    category: "Humility"
  },
  {
    arabic: "",
    english: "A wise man first thinks and then speaks, and a fool speaks first and then thinks.",
    urdu: "عقلمند پہلے سوچتا ہے پھر بولتا ہے، اور بے وقوف پہلے بولتا ہے پھر سوچتا ہے۔",
    category: "Wisdom"
  },
  {
    arabic: "",
    english: "Behave with others as you would desire them to behave with you.",
    urdu: "دوسروں کے ساتھ ویسا سلوک کرو جیسا تم ان سے چاہتے ہو۔",
    category: "Character"
  },
  {
    arabic: "",
    english: "I love the opinion of an old man more than the determination of a young man.",
    urdu: "مجھے بوڑھے کی رائے نوجوان کے عزم سے زیادہ پسند ہے۔",
    category: "Wisdom"
  },
  {
    arabic: "",
    english: "The tongue is like a lion. If you let it loose, it will wound someone.",
    urdu: "زبان شیر کی مانند ہے۔ اگر تم اسے چھوڑ دو تو یہ کسی کو زخمی کر دے گی۔",
    category: "Character"
  },
  {
    arabic: "",
    english: "Justice puts everything in its right place, while injustice puts things in the wrong place.",
    urdu: "عدل ہر چیز کو اس کی صحیح جگہ رکھتا ہے، جبکہ ظلم چیزوں کو غلط جگہ رکھتا ہے۔",
    category: "Justice"
  },
  {
    arabic: "",
    english: "The best revenge is to improve yourself.",
    urdu: "بہترین بدلہ اپنے آپ کو بہتر بنانا ہے۔",
    category: "Character"
  },
  {
    arabic: "",
    english: "Silence is the best reply to a fool.",
    urdu: "خاموشی بے وقوف کا بہترین جواب ہے۔",
    category: "Wisdom"
  },
  {
    arabic: "",
    english: "He who has a thousand friends has not a friend to spare, and he who has one enemy will meet him everywhere.",
    urdu: "جس کے ہزار دوست ہوں اس کے پاس کوئی فاضل نہیں، اور جس کا ایک دشمن ہو وہ اسے ہر جگہ ملے گا۔",
    category: "Friendship"
  },
  {
    arabic: "",
    english: "Two things define you: your patience when you have nothing, and your attitude when you have everything.",
    urdu: "دو چیزیں تمہاری شناخت بناتی ہیں: تمہارا صبر جب تمہارے پاس کچھ نہ ہو، اور تمہارا رویہ جب تمہارے پاس سب کچھ ہو۔",
    category: "Character"
  },
  {
    arabic: "",
    english: "Do not raise your children the way your parents raised you. They were born for a different time.",
    urdu: "اپنے بچوں کی تربیت اس طرح نہ کرو جیسے تمہارے والدین نے تمہاری کی۔ وہ ایک مختلف زمانے کے لیے پیدا ہوئے ہیں۔",
    category: "Parenting"
  },
  {
    arabic: "",
    english: "The world is a bridge, pass over it but do not build upon it.",
    urdu: "دنیا ایک پل ہے، اس سے گزر جاؤ لیکن اس پر گھر مت بناؤ۔",
    category: "Life"
  },
  {
    arabic: "",
    english: "A person's true wealth is the good he does in this world.",
    urdu: "انسان کی حقیقی دولت وہ نیکی ہے جو وہ اس دنیا میں کرتا ہے۔",
    category: "Charity"
  },
  {
    arabic: "",
    english: "Poverty is the worst form of death.",
    urdu: "غربت موت کی بدترین شکل ہے۔",
    category: "Society"
  },
  {
    arabic: "",
    english: "Fear the sins you commit in secret, because the Witness of those sins is the Judge himself.",
    urdu: "چھپ کر کیے گئے گناہوں سے ڈرو، کیونکہ ان گناہوں کا گواہ خود قاضی ہے۔",
    category: "God-Consciousness"
  },
  {
    arabic: "",
    english: "Forgiveness is the crown of greatness.",
    urdu: "معافی عظمت کا تاج ہے۔",
    category: "Forgiveness"
  },
  {
    arabic: "",
    english: "The strongest among you is the one who controls his anger.",
    urdu: "تم میں سب سے طاقتور وہ ہے جو اپنے غصے پر قابو رکھے۔",
    category: "Self-Control"
  },
  {
    arabic: "",
    english: "People are enemies of what they do not know.",
    urdu: "لوگ اس چیز کے دشمن ہیں جسے وہ نہیں جانتے۔",
    category: "Knowledge"
  },
  {
    arabic: "",
    english: "Associate with people in such a manner that they weep for you when you die and long for you when you are alive.",
    urdu: "لوگوں سے ایسا سلوک کرو کہ مرنے پر وہ تمہارے لیے روئیں اور زندگی میں تمہارے مشتاق رہیں۔",
    category: "Character"
  },
  {
    arabic: "",
    english: "The worth of a man is according to his courage, his truthfulness is according to his honesty, his greatness is according to his self-respect.",
    urdu: "انسان کی قدر اس کی ہمت کے مطابق ہے، اس کی سچائی اس کی ایمانداری کے مطابق ہے، اس کی عظمت اس کی عزتِ نفس کے مطابق ہے۔",
    category: "Character"
  },
  {
    arabic: "",
    english: "One who rushes headlong into matters without thinking is exposed to stumbling and failure.",
    urdu: "جو بغیر سوچے سمجھے معاملات میں جلد بازی کرے وہ ٹھوکر اور ناکامی کا شکار ہوتا ہے۔",
    category: "Wisdom"
  }
];

/* ── Daily Quote Rotation ─────────────────────────────────── */
function getDailyQuote() {
  // Use the day of the year to rotate quotes
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const index = dayOfYear % aqwalEZareen.length;
  return aqwalEZareen[index];
}

function setDailyQuote() {
  const quoteEl = document.getElementById('dailyQuoteText');
  if (!quoteEl) return;

  const dailyQuote = getDailyQuote();
  quoteEl.textContent = `"${dailyQuote.english}"`;
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', setDailyQuote);


/* ── Quote Sharing (for future use) ───────────────────────── */
function shareQuote(quoteText) {
  if (navigator.share) {
    navigator.share({
      title: 'Aqwal-e-Zareen — Ali Mushkil Kusha',
      text: quoteText + '\n— Hazrat Ali ibn Abi Talib (RA)',
      url: 'https://alimushkilkusha.com/pages/sayings.html'
    }).catch(() => {});
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(
      quoteText + '\n— Hazrat Ali ibn Abi Talib (RA)\nhttps://alimushkilkusha.com'
    ).then(() => {
      alert('Quote copied to clipboard!');
    }).catch(() => {});
  }
}


/* ── Get Random Quote ─────────────────────────────────────── */
function getRandomQuote() {
  const index = Math.floor(Math.random() * aqwalEZareen.length);
  return aqwalEZareen[index];
}


/* ── Get Quotes by Category ───────────────────────────────── */
function getQuotesByCategory(category) {
  return aqwalEZareen.filter(q =>
    q.category.toLowerCase() === category.toLowerCase()
  );
}


/* ── Get All Categories ───────────────────────────────────── */
function getAllCategories() {
  return [...new Set(aqwalEZareen.map(q => q.category))].sort();
}
