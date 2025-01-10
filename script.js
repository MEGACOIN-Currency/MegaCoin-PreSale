
const translations = {
    en: {
        title: "Welcome to MegaCoin Pre-Sale",
        aboutTitle: "About MegaCoin",
        aboutText: "MegaCoin (MGC) is the latest Solana SPL token with a focus on innovation and rewards.",
        preSaleTitle: "Pre-Sale Details",
        totalSupply: "Total Supply: 10,000,000 MGC",
        preSalePrice: "Pre-Sale Price: 0.5 USDC per MGC",
        availablePreSale: "Available for Pre-Sale: 5,000,000 MGC",
        contactText: "Contact us at: support@megacoin.com | Follow us on Discord and Twitter",
    },
    zh: {
        title: "欢迎来到 MegaCoin 预售",
        aboutTitle: "关于 MegaCoin",
        aboutText: "MegaCoin (MGC) 是最新的 Solana SPL 代币，专注于创新和奖励。",
        preSaleTitle: "预售详情",
        totalSupply: "总供应量：10,000,000 MGC",
        preSalePrice: "预售价格：每 MGC 0.5 USDC",
        availablePreSale: "预售可用量：5,000,000 MGC",
        contactText: "联系我们：support@megacoin.com | 关注我们在 Discord 和 Twitter",
    },
    ar: {
        title: "مرحبًا بكم في مرحلة البيع المسبق لـ MegaCoin",
        aboutTitle: "حول MegaCoin",
        aboutText: "MegaCoin (MGC) هو أحدث رمز SPL على شبكة Solana، يركز على الابتكار والمكافآت.",
        preSaleTitle: "تفاصيل البيع المسبق",
        totalSupply: "الإجمالي الكلي: 10,000,000 MGC",
        preSalePrice: "سعر البيع المسبق: 0.5 USDC لكل MGC",
        availablePreSale: "المتاح للبيع المسبق: 5,000,000 MGC",
        contactText: "تواصل معنا على: support@megacoin.com | تابعنا على Discord و Twitter",
    }
};

function switchLanguage(lang) {
    document.documentElement.lang = lang;
    document.getElementById("title").innerText = translations[lang].title;
    document.getElementById("about-title").innerText = translations[lang].aboutTitle;
    document.getElementById("about-text").innerText = translations[lang].aboutText;
    document.getElementById("pre-sale-title").innerText = translations[lang].preSaleTitle;
    document.getElementById("total-supply").innerText = translations[lang].totalSupply;
    document.getElementById("pre-sale-price").innerText = translations[lang].preSalePrice;
    document.getElementById("available-pre-sale").innerText = translations[lang].availablePreSale;
    document.getElementById("contact-text").innerText = translations[lang].contactText;
}
