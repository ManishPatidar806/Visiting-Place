const sampleListings = [
    {
      title: "Tirumala Venkateswara Temple",
      description:
        "Located in Tirupati, Andhra Pradesh, this temple is dedicated to Lord Venkateswara, a form of Vishnu. It is one of the richest and most visited temples in the world.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Tirumala_090615.jpg",
      price: 0,
      location: "Tirupati",
      state: "Andhra Pradesh",
    },
    {
      title: "Golden Temple",
      description:
        "The Golden Temple, also known as Sri Harmandir Sahib, is a sacred Sikh shrine located in Amritsar, Punjab. It is known for its stunning architecture and being a symbol of human brotherhood and equality.",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/94/The_Golden_Temple_of_Amrithsar_7.jpg",
      location: "Amritsar",
      state: "Punjab",
    },
    {
      title: "Kashi Vishwanath Temple",
      description:
        "Situated in Varanasi, Uttar Pradesh, the Kashi Vishwanath Temple is dedicated to Lord Shiva. It is one of the most famous Hindu temples and a significant pilgrimage site.",
      image: "https://d3k1i85mml78tf.cloudfront.net/Blogs/1658946850086_post_image_1.jpg",
      location: "Varanasi",
      state: "Uttar Pradesh",
    },
    {
      title: "Meenakshi Amman Temple",
      description:
        "Located in Madurai, Tamil Nadu, the Meenakshi Amman Temple is dedicated to Goddess Parvati, known as Meenakshi, and her consort Lord Shiva. It is renowned for its architecture and elaborate sculptures.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/An_aerial_view_of_Madurai_city_from_atop_of_Meenakshi_Amman_temple.jpg/1024px-An_aerial_view_of_Madurai_city_from_atop_of_Meenakshi_Amman_temple.jpg",
      location: "Madurai",
      state: "Tamil Nadu",
    },
    {
      title: "Akshardham Temple",
      description:
        "The Akshardham Temple, located in Delhi, is a Hindu temple complex known for its intricate carvings and grand architecture. It is dedicated to Bhagwan Swaminarayan.",
      image: "https://media.easemytrip.com/media/Blog/India/637116640324801740/637116640324801740ptZ4Mc.jpg",
      location: "Delhi",
      state: "Delhi",
    },
    {
      title: "Jagannath Temple",
      description:
        "Situated in Puri, Odisha, the Jagannath Temple is dedicated to Lord Jagannath, a form of Vishnu. It is famous for the Rath Yatra festival, during which the deities are taken out in a grand procession.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/ABX_SHRI_PURUSHOTTAMA_KSHETRA_PURI.jpg/1024px-ABX_SHRI_PURUSHOTTAMA_KSHETRA_PURI.jpg",
      location: "Puri",
      state: "Odisha",
    },
    {
      title: "Somnath Temple",
      description:
        "Located in Gujarat, the Somnath Temple is one of the twelve Jyotirlinga shrines of Lord Shiva. It has a rich history and is believed to have been rebuilt several times.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Somanath_mandir_%28cropped%29.jpg/1024px-Somanath_mandir_%28cropped%29.jpg",
      location: "Somnath",
      state: "Gujarat",
    },
    {
      title: "Brihadeeswarar Temple",
      description:
        "Also known as the Big Temple, the Brihadeeswarar Temple is located in Thanjavur, Tamil Nadu. It is dedicated to Lord Shiva and is a UNESCO World Heritage Site known for its architectural brilliance.",
      image: "https://pujacraft.com/cdn/shop/articles/Brihadeeswarar-Temple-Thanjavur-Tamil-Nadu-1.jpg?v=1684509985&width=1080",
      location: "Thanjavur",
      state: "Tamil Nadu",
    },
  
    {
        title: "Vaishno Devi Temple",
        description:
          "Located in the Trikuta Mountains in Jammu and Kashmir, the Vaishno Devi Temple is dedicated to the Hindu goddess Mata Vaishno Devi. It is one of the most visited pilgrimage sites in India.",
        image: "https://static.india.com/wp-content/uploads/2020/09/vaisno1200.jpg?impolicy=Medium_Widthonly&w=700",
        location: "Jammu",
        state: "Jammu and Kashmir",
      },
      {
        title: "Badrinath Temple",
        description:
          "Situated in the town of Badrinath in Uttarakhand, the Badrinath Temple is dedicated to Lord Vishnu. It is one of the Char Dham pilgrimage sites and is believed to be one of the holiest Hindu temples.",
        image: "https://www.tourmyindia.com/chardham/images/badrinath-dham1.jpg",
        location: "Badrinath",
        state: "Uttarakhand",
      },
      {
        title: "Ramanathaswamy Temple",
        description:
          "Located on Rameswaram Island in Tamil Nadu, the Ramanathaswamy Temple is dedicated to Lord Shiva. It is one of the twelve Jyotirlinga temples and is renowned for its massive corridors and ornate pillars.",
        image: "https://vedicfeed.com/wp-content/uploads/2019/01/Ramanathaswamy-Temple-e1505062133913.jpg",
        location: "Rameswaram",
        state: "Tamil Nadu",
      },
      {
        title: "Siddhivinayak Temple",
        description:
          "Situated in Mumbai, Maharashtra, the Siddhivinayak Temple is dedicated to Lord Ganesh. It is one of the richest temples in Mumbai and is visited by thousands of devotees daily.",
        image: "https://www.mapsofindia.com/ci-moi-images/my-india/siddhivinayak-temple-mumbai.jpg",
        location: "Mumbai",
        state: "Maharashtra",
      },
      {
        title: "Jain Temple of Dilwara",
        description:
          "Located in Mount Abu, Rajasthan, the Jain Temple of Dilwara is a complex of temples dedicated to Jain Tirthankaras. It is known for its intricate marble carvings and stunning architecture.",
        image: "https://rajasthanstudio.com/wp-content/uploads/2022/06/1-1-1000x565.png",
        location: "Mount Abu",
        state: "Rajasthan",
      },
      {
        title: "Kedarnath Temple",
        description:
          "Situated in the Himalayan range of Uttarakhand, the Kedarnath Temple is dedicated to Lord Shiva. It is one of the Char Dham pilgrimage sites and is believed to be one of the holiest Hindu temples.",
        image: "https://images.firstpost.com/uploads/2023/07/Untitled-design-2023-07-05T192511.411.jpg?im=FitAndFill=(596,336)",
        location: "Kedarnath",
        state: "Uttarakhand",
      },
      {
        title: "Mahabodhi Temple",
        description:
          "Located in Bodh Gaya, Bihar, the Mahabodhi Temple is a UNESCO World Heritage Site and is one of the four holy sites related to the life of Buddha. It marks the spot where Buddha is said to have attained enlightenment.",
        image: "https://www.tripsavvy.com/thmb/6HUrLCC7jvAxECaZC6T9SuhYh5g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-618355052-b865a78b33cf412b915909ad9d941f27.jpg",
        location: "Bodh Gaya",
        state: "Bihar",
      },
      {
        title: "Lingaraj Temple",
        description:
          "Situated in Bhubaneswar, Odisha, the Lingaraj Temple is dedicated to Lord Shiva. It is one of the oldest temples in Bhubaneswar and is known for its impressive architecture and intricate carvings.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Lingaraj_Temple_Complex.jpg/1024px-Lingaraj_Temple_Complex.jpg",
        location: "Bhubaneswar",
        state: "Odisha",
      },
  
      {
        title: "Sree Padmanabhaswamy Temple",
        description:
          "Located in Thiruvananthapuram, Kerala, this temple is dedicated to Lord Padmanabhaswamy (Vishnu). It is known for its architectural beauty and is one of the wealthiest temples in the world.",
        image: "https://imageio.forbes.com/blogs-images/jimdobson/files/2016/05/Sree_Padmanabhaswamy_Temple.jpg?format=jpg&width=1440https://imageio.forbes.com/blogs-images/jimdobson/files/2016/05/Sree_Padmanabhaswamy_Temple.jpg?format=jpg&width=1440",
        location: "Thiruvananthapuram",
        state: "Kerala",
      },
      {
        title: "Siddheshwar Temple",
        description:
          "Situated in Solapur, Maharashtra, the Siddheshwar Temple is dedicated to Lord Siddheshwar (Shiva). It is one of the most revered temples in Maharashtra and attracts devotees from all over the state.",
        image: "https://kevinstandagephotography.wordpress.com/wp-content/uploads/2020/03/ksp_7155.jpg?w=1024",
        location: "Solapur",
        state: "Maharashtra",
      },
      {
        title: "Kamakhya Temple",
        description:
          "Located atop the Nilachal Hill in Guwahati, Assam, the Kamakhya Temple is dedicated to Goddess Kamakhya (a form of Shakti). It is one of the oldest and most important Shakti temples in India.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Kamakhya_Temple%2C_Guwahati.jpg",
        location: "Guwahati",
        state: "Assam",
      },
      {
        title: "Srikalahasteeswara Temple",
        description:
          "Situated in Srikalahasti, Andhra Pradesh, this temple is dedicated to Lord Shiva. It is renowned for its architecture, and the temple's inner sanctum is said to be a site of great spiritual significance.",
        image: "https://nimblefoundation.wordpress.com/wp-content/uploads/2024/04/srikalahasteeswara-temple-1.jpg",
        location: "Srikalahasti",
        state: "Andhra Pradesh",
      },
      {
        title: "Chennakesava Temple",
        description:
          "Located in Belur, Karnataka, the Chennakesava Temple is dedicated to Lord Vishnu. It is famous for its Hoysala architecture and intricate sculptures depicting scenes from Hindu mythology.",
        image: "https://qph.cf2.quoracdn.net/main-qimg-4f013e026e2f622753a97bba94326801-lq",
        location: "Belur",
        state: "Karnataka",
      },
  
      {
        title: "Tirupati Balaji Temple",
        description:
          "Located in Tirumala, Andhra Pradesh, the Tirupati Balaji Temple is dedicated to Lord Venkateswara (a form of Vishnu). It is one of the richest temples in the world and attracts millions of devotees annually.",
        image: "https://resize.indiatv.in/resize/newbucket/1200_675/2019/05/tirupatibalaji-1557475305.webp",
        location: "Tirumala",
        state: "Andhra Pradesh",
      },
      {
        title: "Vaikuntha Perumal Temple",
        description:
          "Located in Kanchipuram, Tamil Nadu, the Vaikuntha Perumal Temple is dedicated to Lord Vishnu. It is one of the Divya Desams, the 108 temples of Vishnu revered in Nalayira Divya Prabandham.",
        image: "https://cdn.shopify.com/s/files/1/1491/9368/files/Vaikuntha_Perumal_temple_Kanchipuram_1024x1024.jpg?v=1478953663",
        location: "Kanchipuram",
        state: "Tamil Nadu",
      },
      {
        title: "Laxminarayan Temple",
        description:
          "Situated in New Delhi, the Laxminarayan Temple is dedicated to Lord Vishnu and Goddess Lakshmi. It is also known as the Birla Mandir and is renowned for its beautiful architecture and lush gardens.",
        image: "https://www.templepurohit.com/wp-content/uploads/2015/12/1-1.jpg",
        location: "New Delhi",
        state: "Delhi",
      },
  ];
  module.exports = { data: sampleListings };  