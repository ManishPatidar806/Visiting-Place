const sampleListings = [
    {
      title: "Tirumala Venkateswara Temple",
      description:
        "The Tirumala Venkateswara Temple, nestled atop the Tirumala Hills in Andhra Pradesh, India, stands as a beacon of Hindu spirituality and architectural magnificence. Dedicated to Lord Venkateswara, an incarnation of Vishnu, it draws millions of devotees annually. The temple complex boasts stunning architecture, featuring intricately carved halls, shrines, and towering gopurams. Pilgrims undertake arduous journeys to seek the deity's blessings, partake in rituals, and offer prayers, imbuing the site with profound religious fervor. With its rich history, cultural significance, and breathtaking beauty, the Tirumala Venkateswara Temple remains a timeless symbol of faith, attracting seekers from across the globe.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Tirumala_090615.jpg",
      price: 0,
      location: "Tirupati",
      state: "Andhra Pradesh",
    },
    {
      title: "Golden Temple",
      description:
        "The Golden Temple, also known as Sri Harmandir Sahib, is a sacred Sikh gurdwara located in Amritsar, Punjab, India. Its breathtaking architecture, adorned with gold leaf, reflects the spiritual essence of Sikhism. Built in the 16th century, it holds the Guru Granth Sahib, the holy scripture of Sikhism, in its inner sanctum. The temple's serene Sarovar (holy lake) symbolizes the concept of equality and unity, welcoming people of all faiths to partake in langar (community kitchen) where free meals are served. As a beacon of peace and harmony, the Golden Temple embodies Sikh values of humility, service, and devotion to the divine.",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/94/The_Golden_Temple_of_Amrithsar_7.jpg",
      location: "Amritsar",
      state: "Punjab",
    },
    {
      title: "Kashi Vishwanath Temple",
      description:
        "The Kashi Vishwanath Temple, situated in Varanasi, Uttar Pradesh, India, is one of the holiest Hindu temples dedicated to Lord Shiva. Revered as the Golden Temple of Varanasi, it stands on the western bank of the sacred Ganges River. The temple's history dates back centuries, with its current structure rebuilt in the 18th century by Maharani Ahilyabai Holkar of Indore. The temple's spire, adorned with gold, gleams in the sunlight, symbolizing the divine presence of Lord Shiva. Devotees flock here to offer prayers, seek blessings, and perform rituals, adding to the spiritual vibrancy of Varanasi, one of the oldest continuously inhabited cities in the world.",
      image: "https://d3k1i85mml78tf.cloudfront.net/Blogs/1658946850086_post_image_1.jpg",
      location: "Varanasi",
      state: "Uttar Pradesh",
    },
    {
      title: "Meenakshi Amman Temple",
      description:
        "The Meenakshi Amman Temple, located in Madurai, Tamil Nadu, India, is a magnificent Hindu temple dedicated to Goddess Meenakshi, an incarnation of Parvati, and her consort Lord Sundareswarar, an aspect of Shiva. Renowned for its stunning Dravidian architecture, the temple complex spans over 14 acres and features towering gopurams (gateway towers) adorned with intricate sculptures and colorful paintings depicting mythological stories. The temple is not only a center of worship but also a hub of cultural and religious activities, hosting vibrant festivals such as Meenakshi Thirukalyanam. Pilgrims and tourists alike are captivated by its beauty, spirituality, and historical significance, making it a cherished symbol of Tamil Nadu's cultural heritage.",
      image: "https://mediaim.expedia.com/destination/2/5a433cd7f8ea09dfad052e052c4827f4.jpg",
      location: "Madurai",
      state: "Tamil Nadu",
    },
    {
      title: "Akshardham Temple",
      description:
        "The Akshardham Temple, situated in Delhi, India, is a marvel of modern architecture and spiritual grandeur. Officially opened in 2005, this sprawling complex celebrates the richness of Indian culture, art, and spirituality. Dedicated to Bhagwan Swaminarayan, it features intricately carved stone facades, majestic domes, and sprawling gardens. The temple's main sanctum houses a stunningly crafted idol of Swaminarayan alongside his spiritual successors. Visitors are enthralled by the temple's exhibitions, showcasing India's ancient wisdom, traditions, and contributions to humanity. With its serene atmosphere and ornate craftsmanship, Akshardham Temple stands as a testament to India's timeless heritage and devotion.",
      image: "https://media.easemytrip.com/media/Blog/India/637116640324801740/637116640324801740ptZ4Mc.jpg",
      location: "Delhi",
      state: "Delhi",
    },
    {
      title: "Jagannath Temple",
      description:
        "The Jagannath Temple, located in Puri, Odisha, India, is one of the most sacred Hindu temples dedicated to Lord Jagannath, a form of Vishnu, along with his siblings Balabhadra and Subhadra. This ancient temple, known for its towering spires and intricate architecture, is an important pilgrimage destination and a symbol of Odisha's cultural heritage. The annual Rath Yatra, or Chariot Festival, where the deities are ceremonially pulled on elaborately decorated chariots through the streets, draws millions of devotees from around the world. The temple's sanctum sanctorum houses the revered idols of the deities, attracting devotees seeking blessings and spiritual solace.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/ABX_SHRI_PURUSHOTTAMA_KSHETRA_PURI.jpg/1024px-ABX_SHRI_PURUSHOTTAMA_KSHETRA_PURI.jpg",
      location: "Puri",
      state: "Odisha",
    },
    {
      title: "Somnath Temple",
      description:
        "The Somnath Temple, located in the Prabhas Kshetra near Veraval in Saurashtra, Gujarat, India, is one of the most revered Hindu temples dedicated to Lord Shiva. Its name translates to The Lord of the Soma, signifying the moon god, and it holds immense spiritual significance. The temple has a rich history, having been destroyed and rebuilt several times over the centuries. Its present form, constructed in the Chalukya style of architecture in the 1950s, stands as a symbol of resilience and devotion. Perched by the Arabian Sea, the temple offers breathtaking views and attracts pilgrims and tourists seeking divine blessings and tranquility.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Somanath_mandir_%28cropped%29.jpg/1024px-Somanath_mandir_%28cropped%29.jpg",
      location: "Somnath",
      state: "Gujarat",
    },
    {
      title: "Brihadeeswarar Temple",
      description:
        "The Brihadeeswarar Temple, also known as the Big Temple, is an ancient Hindu temple dedicated to Lord Shiva. It is located in Thanjavur (Tanjore), Tamil Nadu, India. Built by the Chola king Raja Raja Chola I in the 11th century, it is a masterpiece of Dravidian architecture and stands as a UNESCO World Heritage Site. The temple is renowned for its towering vimana (temple tower), which is one of the tallest of its kind in the world. The temple complex also houses various shrines, mandapas (pillared halls), and exquisite sculptures, reflecting the artistic and architectural brilliance of the Chola dynasty. The Brihadeeswarar Temple remains a symbol of spiritual devotion, cultural heritage, and architectural splendor.",
      image: "https://pujacraft.com/cdn/shop/articles/Brihadeeswarar-Temple-Thanjavur-Tamil-Nadu-1.jpg?v=1684509985&width=1080",
      location: "Thanjavur",
      state: "Tamil Nadu",
    },
  
    {
        title: "Vaishno Devi Temple",
        description:
          "The Vaishno Devi Temple, nestled in the Trikuta Mountains of the Indian state of Jammu and Kashmir, is one of the holiest Hindu shrines dedicated to Goddess Vaishno Devi, a manifestation of the Divine Mother. Perched at an altitude of approximately 5,200 feet, the temple attracts millions of devotees each year who embark on a rigorous pilgrimage to seek the blessings of the goddess. The journey involves trekking through picturesque mountain trails, symbolizing the spiritual quest for enlightenment. The temple complex comprises the main cave shrine where the deity resides, along with various other temples and facilities for pilgrims. Devotees believe that a pilgrimage to Vaishno Devi fulfills their wishes and brings spiritual fulfillment.",
        image: "https://static.india.com/wp-content/uploads/2020/09/vaisno1200.jpg?impolicy=Medium_Widthonly&w=700",
        location: "Jammu",
        state: "Jammu and Kashmir",
      },
      {
        title: "Badrinath Temple",
        description:
          "The Badrinath Temple, located in the town of Badrinath in Uttarakhand, India, is one of the most revered Hindu temples dedicated to Lord Vishnu. Situated amidst the breathtaking Himalayan mountain range, the temple is part of the Char Dham pilgrimage circuit. It stands at an altitude of approximately 10,279 feet (3,133 meters) above sea level, making it one of the highest temples in India. The temple's architecture, with its distinctive towering structure and vibrant colors, reflects both spiritual significance and aesthetic beauty. Pilgrims from across the world visit Badrinath to seek the blessings of Lord Vishnu and to experience the serenity of the surrounding natural landscape, making it a cherished destination for spiritual seekers and nature enthusiasts alike.",
        image: "https://www.tourmyindia.com/chardham/images/badrinath-dham1.jpg",
        location: "Badrinath",
        state: "Uttarakhand",
      },
      {
        title: "Ramanathaswamy Temple",
        description:
          "The Ramanathaswamy Temple, located on Rameswaram Island in Tamil Nadu, India, is a sacred Hindu temple dedicated to Lord Shiva. Renowned for its stunning architecture and historical significance, the temple holds immense spiritual importance for devotees. It is one of the 12 Jyotirlinga shrines, where Lord Shiva is worshipped in the form of a sacred lingam. The temple's intricate corridors, majestic gopurams (towering gateways), and sacred tanks, including the holy Agni Theertham, attract pilgrims from around the world. The temple is also known for its religious rituals and festivals, including the grand annual 12-day Mahashivratri festival. Visiting the Ramanathaswamy Temple is believed to cleanse one's sins and bestow divine blessings upon devotees.",
        image: "https://vedicfeed.com/wp-content/uploads/2019/01/Ramanathaswamy-Temple-e1505062133913.jpg",
        location: "Rameswaram",
        state: "Tamil Nadu",
      },
      {
        title: "Siddhivinayak Temple",
        description:
          "The Siddhivinayak Temple, located in Mumbai, Maharashtra, India, is a revered Hindu temple dedicated to Lord Ganesha, the remover of obstacles and bestower of success. Situated in Prabhadevi, this iconic temple is renowned for its rich spiritual heritage and architectural splendor. Devotees from all walks of life visit the temple to offer prayers and seek blessings for prosperity, wisdom, and fulfillment of desires. The temple's sanctum sanctorum houses a black stone idol of Lord Ganesha, adorned with precious jewels and ornaments. With its vibrant atmosphere and profound sense of devotion, the Siddhivinayak Temple stands as a beacon of faith and hope for millions of worshippers.",
        image: "https://www.mapsofindia.com/ci-moi-images/my-india/siddhivinayak-temple-mumbai.jpg",
        location: "Mumbai",
        state: "Maharashtra",
      },
      {
        title: "Jain Temple of Dilwara",
        description:
          "The Jain Temple of Dilwara, situated near Mount Abu in Rajasthan, India, is renowned for its exquisite marble architecture and intricate carvings. This complex consists of five temples dedicated to the Jain Tirthankaras, or spiritual teachers. Built between the 11th and 13th centuries, these temples are a testament to the extraordinary craftsmanship of the artisans of that era. The intricate marble carvings, including delicate filigree work and detailed sculptures, adorn the interiors of the temples. The meticulous attention to detail and the spiritual ambiance make the Dilwara Jain Temple a significant pilgrimage site for followers of Jainism and a marvel for art enthusiasts worldwide.",
        image: "https://rajasthanstudio.com/wp-content/uploads/2022/06/1-1-1000x565.png",
        location: "Mount Abu",
        state: "Rajasthan",
      },
      {
        title: "Kedarnath Temple",
        description:
          "The Kedarnath Temple, located in the Himalayan state of Uttarakhand, India, is one of the holiest Hindu temples dedicated to Lord Shiva. Situated amidst the majestic Garhwal Himalayas at an altitude of approximately 11,755 feet (3,583 meters), the temple holds immense spiritual significance for devotees. It is part of the Char Dham pilgrimage circuit and is believed to be one of the twelve Jyotirlinga shrines, where Lord Shiva is worshipped in the form of a sacred lingam. The temple's architecture, with its stone construction and pyramid-shaped roof, reflects both its religious importance and the challenging terrain it stands in. Pilgrims undertake a rigorous journey through picturesque mountain trails to reach Kedarnath, seeking the blessings and divine grace of Lord Shiva.",
        image: "https://images.firstpost.com/uploads/2023/07/Untitled-design-2023-07-05T192511.411.jpg?im=FitAndFill=(596,336)",
        location: "Kedarnath",
        state: "Uttarakhand",
      },
      {
        title: "Mahabodhi Temple",
        description:
          "The Mahabodhi Temple, situated in Bodh Gaya, Bihar, India, is a UNESCO World Heritage Site and one of the most important Buddhist pilgrimage sites in the world. It marks the location where Siddhartha Gautama, the Buddha, attained enlightenment under the Bodhi tree over 2,500 years ago. The temple complex, built in the 3rd century BCE by Emperor Ashoka, encompasses the sacred Bodhi tree, a large main temple structure, and various stupas and shrines. The architecture of the temple reflects a blend of Indian and Buddhist styles, adorned with intricate carvings and sculptures. Pilgrims from around the globe visit the Mahabodhi Temple to meditate, offer prayers, and pay homage to the Buddha, making it a symbol of peace, enlightenment, and spiritual awakening.",
        image: "https://www.tripsavvy.com/thmb/6HUrLCC7jvAxECaZC6T9SuhYh5g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-618355052-b865a78b33cf412b915909ad9d941f27.jpg",
        location: "Bodh Gaya",
        state: "Bihar",
      },
      {
        title: "Lingaraj Temple",
        description:
          "The Lingaraj Temple, located in Bhubaneswar, Odisha, India, is one of the most prominent and revered Hindu temples dedicated to Lord Shiva. Dating back to the 11th century, this ancient temple is a masterpiece of Kalinga architecture and a significant pilgrimage site for devotees. The temple's towering spire, intricately carved walls, and numerous smaller shrines within its complex showcase the architectural brilliance and cultural heritage of the region. The Lingaraj Temple is known for its religious festivals, especially Shivratri, when thousands of devotees gather to offer prayers and seek blessings from Lord Shiva. With its spiritual ambiance and historical significance, the Lingaraj Temple continues to be a symbol of devotion and reverence in the heart of Odisha.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Lingaraj_Temple_Complex.jpg/1024px-Lingaraj_Temple_Complex.jpg",
        location: "Bhubaneswar",
        state: "Odisha",
      },
  
      {
        title: "Sree Padmanabhaswamy Temple",
        description:
          "The Sree Padmanabhaswamy Temple, situated in Thiruvananthapuram (Trivandrum), Kerala, India, is an ancient and revered Hindu temple dedicated to Lord Padmanabhaswamy, an incarnation of Lord Vishnu. Renowned for its architectural grandeur, the temple features a stunning Dravidian-style architecture with intricate carvings and towering gopurams (gateways). The deity is depicted in a reclining posture on the sacred serpent Anantha, symbolizing cosmic stability. The temple is famous for its immense wealth, with its underground vaults rumored to contain treasures worth billions of dollars. Devotees flock here to seek blessings and participate in various rituals and festivals, making it a significant spiritual and cultural landmark in Kerala.",
        image: "https://imageio.forbes.com/blogs-images/jimdobson/files/2016/05/Sree_Padmanabhaswamy_Temple.jpg?format=jpg&width=1440https://imageio.forbes.com/blogs-images/jimdobson/files/2016/05/Sree_Padmanabhaswamy_Temple.jpg?format=jpg&width=1440",
        location: "Thiruvananthapuram",
        state: "Kerala",
      },
      {
        title: "Siddheshwar Temple",
        description:
          "The Siddheshwar Temple, located in Solapur, Maharashtra, India, is a revered Hindu temple dedicated to Lord Siddheshwar, an incarnation of Lord Shiva. This ancient temple holds immense spiritual significance for devotees, attracting pilgrims from various parts of the country. The temple's architecture reflects a blend of traditional Marathi and Dravidian styles, featuring intricate carvings and sculptures depicting mythological themes. The sanctum sanctorum houses the lingam (symbol of Shiva), worshipped with great devotion by devotees seeking blessings, fulfillment of desires, and liberation from worldly sufferings. The Siddheshwar Temple is also known for its vibrant festivals, which celebrate the glory of Lord Shiva and foster a sense of community among worshippers.",
        image: "https://kevinstandagephotography.wordpress.com/wp-content/uploads/2020/03/ksp_7155.jpg?w=1024",
        location: "Solapur",
        state: "Maharashtra",
      },
      {
        title: "Kamakhya Temple",
        description:
          "The Kamakhya Temple is a special place in India, in a city called Guwahati, which is in the state of Assam. This temple is very important to many people because it's a place where they worship the goddess Kamakhya. People believe that she has special powers and can fulfill their wishes.The temple itself is quite old and has a unique design. It's located on top of a hill and has a special dome on top. Inside, there's a stone that represents the goddess. People come from all over to pray here, especially during a festival called Ambubachi Mela, which happens once a year.Apart from being a place of worship, the Kamakhya Temple is also a beautiful spot with a lovely view of the city below. Many people visit not just for religious reasons but also to enjoy the peaceful atmosphere and the natural beauty surrounding the temple.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Kamakhya_Temple%2C_Guwahati.jpg",
        location: "Guwahati",
        state: "Assam",
      },
      {
        title: "Srikalahasteeswara Temple",
        description:
          "The Srikalahasteeswara Temple is a famous temple in India, located in the town of Srikalahasti in Andhra Pradesh. This temple is dedicated to Lord Shiva, and it's a very important place of worship for Hindus.  One special thing about this temple is that it's believed to be one of the Pancha Bhoota Sthalas, which means it represents one of the five elements of nature. In this case, it represents the element of air. People come here to seek blessings and to perform rituals to honor Lord Shiva.The temple has a unique architecture with intricate carvings and sculptures. It's also known for its large gopuram (tower) that stands tall at the entrance. People from different parts of the country visit the Srikalahasteeswara Temple to experience its spiritual vibes and to connect with the divine.",
        image: "https://nimblefoundation.wordpress.com/wp-content/uploads/2024/04/srikalahasteeswara-temple-1.jpg",
        location: "Srikalahasti",
        state: "Andhra Pradesh",
      },
      {
        title: "Chennakesava Temple",
        description:
          "The Chennakesava Temple is a very old and important temple located in the town of Belur in Karnataka, India. This temple is dedicated to Lord Vishnu, who is worshipped as Chennakesava, which means Handsome Vishnu.This temple is renowned for its exquisite architecture, especially its intricate carvings and sculptures. It was built in the 12th century by the Hoysala Empire, and it's considered a masterpiece of Hindu temple architecture. One remarkable feature of the Chennakesava Temple is its main entrance, which is adorned with beautifully carved sculptures of gods, goddesses, animals, and mythical creatures. Inside, you can find the main sanctum where the idol of Lord Chennakesava is worshipped.People visit this temple not only for its religious significance but also to admire its stunning beauty and to learn about the rich history and culture of India.",
        image: "https://qph.cf2.quoracdn.net/main-qimg-4f013e026e2f622753a97bba94326801-lq",
        location: "Belur",
        state: "Karnataka",
      },
  
      {
        title: "Tirupati Balaji Temple",
        description:
          "The Tirupati Balaji Temple, officially known as the Sri Venkateswara Temple, is one of the most famous and sacred Hindu temples in the world. It is located in the hill town of Tirumala in the state of Andhra Pradesh, India. Dedicated to Lord Venkateswara, an incarnation of the Hindu god Vishnu, the temple is a major pilgrimage destination for devotees from all over the world. The temple complex is vast and includes several shrines, halls, and pavilions. The central deity, Lord Venkateswara, is worshipped in the main sanctum sanctorum. The temple is known for its ornate architecture, towering gopurams (gateway towers), and intricately carved pillars. Devotees flock to the Tirupati Balaji Temple to offer prayers, seek blessings, and make offerings to the deity. The temple is also famous for its laddu prasadam, a sweet delicacy offered to devotees as a blessing from the deity.The Tirupati Balaji Temple attracts millions of pilgrims every year, making it one of the most visited religious sites in the world. It is not just a place of worship but also a symbol of devotion, faith, and spiritual fulfillment for millions of Hindus worldwide.",
        image: "https://resize.indiatv.in/resize/newbucket/1200_675/2019/05/tirupatibalaji-1557475305.webp",
        location: "Tirumala",
        state: "Andhra Pradesh",
      },
      {
        title: "Vaikuntha Perumal Temple",
        description:
          "The Vaikuntha Perumal Temple is an ancient Hindu temple located in Kanchipuram, Tamil Nadu, India. It is dedicated to Lord Vishnu and is one of the 108 Divya Desams, which are sacred temples mentioned in the Tamil Vaishnavite texts. This temple is renowned for its historical significance and architectural beauty. It was built during the Pallava dynasty in the 7th-8th century CE and is considered one of the earliest structural temples in South India. The temple complex features intricate carvings and sculptures depicting scenes from Hindu mythology. The main deity of the Vaikuntha Perumal Temple is Lord Vishnu in his three forms: standing, sitting, and reclining. Devotees visit the temple to offer prayers and seek blessings from the deity. The temple is also known for its festivals, particularly the Vaikuntha Ekadashi, which is celebrated with great fervor.The Vaikuntha Perumal Temple holds a special place in the hearts of devotees and is a symbol of faith, devotion, and cultural heritage in the region.",
        image: "https://cdn.shopify.com/s/files/1/1491/9368/files/Vaikuntha_Perumal_temple_Kanchipuram_1024x1024.jpg?v=1478953663",
        location: "Kanchipuram",
        state: "Tamil Nadu",
      },
      {
        title: "Laxminarayan Temple",
        description:
          "The Laxminarayan Temple, also known as the Birla Mandir, is a Hindu temple located in New Delhi, India. Dedicated to Lord Vishnu and Goddess Lakshmi, it was built by the Birla family in the 1930s. The temple is renowned for its architectural beauty, blending traditional Hindu temple architecture with modern influences.The main shrine houses idols of Lord Vishnu and Goddess Lakshmi, beautifully adorned with intricate carvings and decorations. The temple complex also includes other shrines dedicated to various deities, as well as sculptures depicting scenes from Hindu mythology. Devotees and visitors come to the Laxminarayan Temple to offer prayers, seek blessings, and experience its peaceful and spiritual ambiance. The temple is also a popular tourist attraction, attracting visitors from all over the world who come to admire its architectural splendor and learn about Hindu culture and religion.",
        image: "https://www.templepurohit.com/wp-content/uploads/2015/12/1-1.jpg",
        location: "New Delhi",
        state: "Delhi",
      },
  ];
  module.exports = { data: sampleListings };  