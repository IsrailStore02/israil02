const kataDepan = [
    "Babi Guling", "Kuda Kuping", "Kanguru Terbang", "Kepiting Terbang", "Buaya Lompat",
    "Kambing Berlari", "Gajah Terbang", "Ular Bercabang", "Anjing Berteriak", "Kucing Nyanyi",
    "Ayam Goyang", "Kelelawar Berenang", "Ikan Terbang", "Belalang Melompat", "Cicak Terbang",
    "Burung Gila", "Katak Menari", "Lumba-lumba Tidur", "Kudanil Terbang", "Kupu-kupu Berjalan",
    "Badak Tidur", "Jerapah Terbang", "Sapi Meloncat", "Cicak Menyanyi", "Burung Hantu Bicara",
    "Hamster Berteriak", "Kadal Tertawa", "Kepiting Nyanyi", "Landak Melompat", "Panda Menari",
    "Gorila Lari", "Koala Berbicara", "Kerbau Terbang", "Kucing Bicara", "Katak Terbang",
    "Lumba-lumba Melompat", "Musang Terbang", "Kanguru Menari", "Owa-owa Terbang", "Ostrich Melompat",
    "Pinguin Berbicara", "Rubah Meloncat", "Squirrel Berteriak", "Tikus Goyang", "Unicorn Mengompol",
    "Zebra Terbang", "Bebek Melompat", "Cicak Menangis", "Domba Berenang", "Elang Nyanyi",
    "Flamingo Tidur", "Gembala Terbang", "Hiu Berlari", "Iguana Berbicara", "Jalak Tertawa",
    "Kangkung Berenang", "Lobster Meloncat", "Macan Tidur", "Nuri Terbang", "Owl Berbicara",
    "Puma Menari", "Quokka Melompat", "Rusa Berenang", "Salamander Berbicara", "Tapir Terbang",
    "Ular Menangis", "Vicuna Tertawa", "Walrus Berlari", "Xerus Meloncat", "Yak Tidur",
    "Zebu Berenang", "Antelope Terbang", "Bison Menyanyi", "Chimpanzee Goyang", "Duck Berbicara",
    "Emu Tidur", "Fox Meloncat", "Gibbon Terbang", "Hedgehog Berenang", "Impala Berlari",
    "Jaguar Menari", "Kangaroo Terbang", "Llama Bicara", "Marmot Menangis", "Nightingale Terbang",
    "Orangutan Tidur", "Peacock Berlari", "Quail Menyanyi", "Rabbit Goyang", "Seal Berbicara",
    "Turtle Meloncat", "Uakari Menari", "Vulture Berenang", "Wombat Terbang", "X-ray Fish Tertawa",
    "Yak Tidur", "Zebu Berenang"
];

function generateNama() {
    const randomIndex = Math.floor(Math.random() * kataDepan.length);
    const namaNgakak = kataDepan[randomIndex];
    
    document.getElementById('namaOutput').innerText = namaNgakak;
}
