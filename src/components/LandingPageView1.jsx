
import React from 'react';
import { useEffect, useState } from "react";
import { Edit2, Loader2 } from 'lucide-react';

import { FaHandHoldingHeart } from "react-icons/fa";
import { MdMusicVideo } from "react-icons/md";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
//framer motion
import { motion, useAnimation } from "motion/react"
import { useInView } from "react-intersection-observer";


const LandingPageView1 = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const username = "vishal12";

  //framer motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  // Animation control for each section
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();

  // Intersection observers for sections
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });
  const [ref4, inView4] = useInView({ threshold: 0.2 });
  const [ref5, inView5] = useInView({ threshold: 0.2 });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    } else {
      controls1.start("hidden"); // Reverse animation when out of view
    }
  }, [inView1, controls1]);

  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    } else {
      controls2.start("hidden"); // Reverse animation when out of view
    }
  }, [inView2, controls2]);

  useEffect(() => {
    if (inView3) {
      controls3.start("visible");
    } else {
      controls3.start("hidden"); // Reverse animation when out of view
    }
  }, [inView3, controls3]);

  useEffect(() => {
    if (inView4) {
      controls4.start("visible");
    } else {
      controls4.start("hidden"); // Reverse animation when out of view
    }
  }, [inView4, controls4]);

  useEffect(() => {
    if (inView5) {
      controls5.start("visible");
    } else {
      controls5.start("hidden"); // Reverse animation when out of view
    }
  }, [inView5, controls5]);

  useEffect(() => {
    const fetchLandingPageData = async () => {

      const response =
      {
        "artistPage": {
          "artistName": "Vishal Mishra",
          "stageTitles": "5-Star Performer | Chart-Topping Artist | Voice Artist",
          "artistBio": "Hello, my name is Vishal Mishra, a passionate musician creating soulful melodies.",
          "artistPhoto": "https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_500x500.jpg",
          "gradientStart": "#9e1b32",
          "gradientEnd": "#0a2c6b"
        },
        "performances": [
          {
            "performanceId": "perf1",
            "eventTitle": "Live at Mumbai Arena",
            "description": "An acoustic performance for music lovers.",
            "ticketPrice": 1499,
            "durationMinutes": 120,
            "platform": "Stage",
            "performanceType": "Team"
          },
          {
            "performanceId": "perf2",
            "eventTitle": "Melody Night",
            "description": "A night of soulful tunes.",
            "ticketPrice": 699,
            "durationMinutes": 30,
            "platform": "Party",
            "performanceType": "Solo"
          },
          {
            "performanceId": "perf3",
            "eventTitle": "Symphony Session",
            "description": "A virtual symphony session with fans.",
            "ticketPrice": 499,
            "durationMinutes": 45,
            "platform": "Theater",
            "performanceType": "Solo"
          }
        ],
        "merchandise": [
          {
            "merchId": "merc1",
            "merchName": "Signed TShirt + Signed Cup + Signed Vinyl",
            "merchDescription": "Limited edition signed merchandise.",
            "price": 399,
            "merchType": "Exclusive",
            "imageURL": "https://img.freepik.com/premium-psd/assortment-merchandising-items_23-2150799377.jpg?semt=ais_hybrid"
          }
        ],
        "songSales": [
          {
            "songId": "song1",
            "title": "Melody of Dreams",
            "priceType": "Variable",
            "description": "An enchanting melody inspired by the beauty of nature.",
            "imageURL": "https://images.t2online.in/cdn-cgi/image/width=1280,quality=70/https://apis.t2online.in/image/journal/article.jpg?img_id=1204123&t=1730672058584"
          },
          {
            "songId": "song2",
            "title": "Echoes of the Heart",
            "priceType": "Set",
            "price": 100,
            "description": "A heartfelt ballad that resonates deeply with listeners.",
            "imageURL": "https://vishal-mishra.com/wp-content/uploads/2024/05/5.jpg"
          },
          {
            "songId": "song3",
            "title": "Rhythm of the Night",
            "priceType": "Set",
            "price": 200,
            "description": "A vibrant and energetic track perfect for dancing.",
            "imageURL": "https://vishal-mishra.com/wp-content/uploads/2024/05/1.jpg"
          },
          {
            "songId": "song4",
            "title": "Journey Within",
            "priceType": "Set",
            "price": 50,
            "description": "A soulful piece reflecting the artist's inner journey.",
            "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg"
          }
        ],
        "musicVideos": [
          {
            "videoId": "vid1",
            "title": "Melodic Memories",
            "description": "A visual treat of my recent performance.",
            "platform": "YouTube",
            "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg"
          },
          {
            "videoId": "vid2",
            "title": "Melodic Memories",
            "description": "A visual treat of my recent performance.",
            "platform": "YouTube",
            "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            "imageURL": "https://clikrecords.com/wp-content/uploads/2022/09/Vishal-Mishra-2.jpg"
          },
        ],
        "fanMessages": {
          "title": "Message Vishal Mishra",
          "description": "Send me your thoughts or questions.",
          "promisedReplyTime": "3"
        },
        "supportPage": {
          "title": "Show Your Love"
        },
        "musicPlatformLinks": [
          {
            "musicPlatform": "JioSaavan",
            "url": "https://www.jiosaavn.com/artist/vishal-mishra-songs/f0sXoS0mUnE_",
            "icon": "https://images.sftcdn.net/images/t_app-icon-m/p/4b3bebe9-f429-42cc-89db-2a9493062a5e/2230401414/jiosaavn-logo"
          },
          {
            "musicPlatform": "Spotify",
            "url": "https://open.spotify.com/artist/5wJ1H6ud777odtZl5gG507",
            "icon": "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
          }
        ]
      }

      setLandingPageData(response);
      setProfileImage(response.artistPage.artistPhoto);

    };
    fetchLandingPageData();
  }, [username]);


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector('#navbar');
    const navbarHeight = navbar.offsetHeight;

    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    } else {
      console.log(`Section with ID ${id} not found`);
    }
  };


  if (!landingPageData) {
    return (
      <Card className="max-w-md mx-auto mt-8">
        <CardContent className="pt-6">
          <div className="text-center">Landing page not found</div>
        </CardContent>
      </Card>
    );
  }

  const { artistPage, performances, merchandise, songSales, musicVideos, fanMessages, supportPage, musicPlatformLinks } = landingPageData;



  return (
    <div className="min-h-screen bg-gray-50" style={{
      background: `linear-gradient(to right, ${artistPage.gradientStart}, ${artistPage.gradientEnd})`
    }}>
      {/* Navbar Section */}
      <nav id="navbar" className="fixed top-0 w-full z-50 ">
        <Card className="rounded-none shadow-sm">
          <CardContent className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
                className="bg-gradient-to-r from-[#9e1b32] via-[#9e1b32]/30 to-transparent rounded-s-3xl px-7 py-2"
              >
                <h2 className="font-bold text-2xl text-black">@{username}</h2>
              </motion.div>

              <Tabs>
                <TabsList className="hidden md:flex">
                  <TabsTrigger className="relative hover:text-black no-underline hover:tracking-wider px-4 py-3 hover:before:scale-x-50 before:scale-x-0 before:origin-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-black before:transition-transform before:duration-300 before:ease-linear "
                    value="performances"
                    onClick={() => scrollToSection('performances')}
                  >
                    Performances
                  </TabsTrigger>
                  <TabsTrigger className="relative hover:text-black no-underline hover:tracking-wider px-4 py-3 hover:before:scale-x-50 before:scale-x-0 before:origin-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-black before:transition-transform before:duration-300 before:ease-linear "
                    value="videos"
                    onClick={() => scrollToSection('videos')}
                  >
                    Videos
                  </TabsTrigger>
                  <TabsTrigger className="relative hover:text-black no-underline hover:tracking-wider px-4 py-3 hover:before:scale-x-50 before:scale-x-0 before:origin-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-black before:transition-transform before:duration-300 before:ease-linear "
                    value="songsSale"
                    onClick={() => scrollToSection('songsSale')}
                  >
                    Songs Sale
                  </TabsTrigger>
                  <TabsTrigger className="relative hover:text-black no-underline hover:tracking-wider px-4 py-3 hover:before:scale-x-50 before:scale-x-0 before:origin-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-black before:transition-transform before:duration-300 before:ease-linear "
                    value="merchandise"
                    onClick={() => scrollToSection('merchandise')}
                  >
                    Merchandise
                  </TabsTrigger>
                  <TabsTrigger className="relative hover:text-black no-underline hover:tracking-wider px-4 py-3 hover:before:scale-x-50 before:scale-x-0 before:origin-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-black before:transition-transform before:duration-300 before:ease-linear "
                    value="fanMessages"
                    onClick={() => scrollToSection('messages')}
                  >
                    Messages
                  </TabsTrigger>
                  <TabsTrigger className="relative hover:text-black no-underline hover:tracking-wider px-4 py-3 hover:before:scale-x-50 before:scale-x-0 before:origin-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-black before:transition-transform before:duration-300 before:ease-linear "
                    value="support"
                    onClick={() => scrollToSection('support')}
                  >
                    Support
                  </TabsTrigger>
                </TabsList>
              </Tabs>

            </div>
          </CardContent>
        </Card>
      </nav>

      {/* Main Content Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="max-w-6xl mx-auto px-4 py-8 pt-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="lg:col-span-4 lg:sticky lg:top-[100px] lg:h-[calc(100vh-100px)] overflow-auto "
            style={{ overflow: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Profile Section */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={profileImage || "/default-avatar.jpg"} alt="Profile" />
                    <AvatarFallback>{username}</AvatarFallback>
                  </Avatar>
                  <h2 className="text-2xl font-bold mt-4">{artistPage.artistName}</h2>
                  <Badge variant="secondary" className="mt-2">
                    {artistPage.stageTitles}
                  </Badge>
                </div>

                {/* Social Links Section */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Connect with me on:</h3>

                  <div className="flex flex-col gap-4">
                    {musicPlatformLinks.map((link) => (
                      <button
                        key={link.musicPlatform + link.url}
                        className="flex items-center p-2 border border-gray-300 rounded-full shadow-md hover:bg-gray-100  overflow-hidden cursor-pointer w-full transform transition-all duration-500 hover:scale-100 hover:shadow-xl"
                        onClick={() => link.url && window.open(link.url, '_blank')}
                      >
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 mr-4">
                          {link.icon ? (
                            <img
                              src={link.icon}
                              alt={`${link.musicPlatform} icon`}
                              className="w-14 h-14 object-cover rounded-full"
                            />
                          ) : null}
                        </div>
                        <span className={`text-sm font-medium ${link.musicPlatform ? '' : 'opacity-50'}`}>
                          {link.musicPlatform || ' '}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-8">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}

              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="div">

              <Card>
                <CardHeader>
                  <CardTitle>About</CardTitle>
                  <CardDescription className='hover:text-slate-900 hover:tracking-wide transition-all ease-in-out duration-700'>{artistPage.artistBio}</CardDescription>
                </CardHeader>
              </Card>

            </motion.div>
            {/* Music Videos Section */}
            <motion.div
              initial={{ x: 200, opacity: 0 }} // Start offscreen to the right and invisible
              animate={{ x: 0, opacity: 1 }}  // Move to the center and become visible
              transition={{ ease: "easeOut", duration: 1 }}
              id="videos">
              <Card className="mt-8 group">
                <CardHeader className="flex flex-row items-center">
                  {/* Icon with hover trigger */}
                  <MdMusicVideo className="text-3xl mr-2 group-hover:opacity-100 group-hover:scale-110 transition duration-700" />

                  {/* Title that appears on hover */}
                  <CardTitle className="opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                    Music Videos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {musicVideos.map((video) => (
                      <Card
                        key={video.videoId}
                        className=" overflow-hidden cursor-pointer w-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                        onClick={() => window.open(video.redirectURL, '_blank')}
                      >
                        <div className="relative">
                          {/* Image with a 3:2 aspect ratio */}
                          <div className="w-full" style={{ paddingTop: '66.66%' /* 2/3 for 3:2 aspect ratio */ }}>
                            <img
                              src={video.imageURL} // Assuming imageUrl is the field containing the image URL
                              alt={video.title}
                              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
                            />
                          </div>

                          {/* Text content below the image */}
                          <div className="p-2 bg-white/90 backdrop-blur-sm flex justify-between items-center">
                            <span className="font-medium">{video.title}</span>
                            <Button variant="ghost" size="icon">
                              <Edit2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                </CardContent>
              </Card>
            </motion.div>


            {/* Scrollable Sections */}
            <ScrollArea className="">


              {/* Performances Section */}
              <motion.div
                ref={ref1}
                variants={fadeInUp}
                initial="hidden"
                animate={controls1}
                transition={{ "duration": 2 }}
                id="performances" className="mt-8">
                <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8">
                  <div className='w-auto bg-[#f7f5fb] text-[#0a2c6b] mb-[12px] p-[3px] rounded-md'>

                    <h2 className="text-3xl font-bold text-center">Performances</h2>
                  </div>

                  {performances.map((perf) => (
                    <motion.div
                      key={perf.performanceId}
                      whileHover={{ scale: 1.05 }}
                      transition={{ "duration": 0.5 }}

                      className="mb-4"
                    >

                      <Card key={perf.performanceId} className="mb-4">
                        <CardHeader>
                          <CardTitle>{perf.eventTitle}</CardTitle>
                          <CardDescription>
                            {perf.description}
                            <br />
                            Duration: {perf.durationMinutes} mins
                            <br />
                            Location: {perf.platform}
                            <br />
                            Price: ${perf.ticketPrice}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button
                            className="mt-2 relative hover:bg-white hover:text-black no-underline hover:tracking-wider px-4 py-3 hover:before:scale-x-75 before:scale-x-0 before:origin-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-black before:transition-transform before:duration-300 before:ease-linear "

                          >
                            Book Now
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Songs sales Section */}
              <div id="songsSale">
                <motion.div
                  ref={ref2}
                  variants={fadeInUp}
                  initial="hidden"
                  animate={controls2}
                  transition={{ "duration": 2 }}
                  className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8">
                  <div className='w-auto bg-[#f7f5fb] text-[#0a2c6b] p-[5px] mb-5 rounded-lg'>

                    <h2 className="text-3xl font-bold text-center">Songs for Sale</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {songSales.map((song) => (
                      <motion.div

                        key={song.songId}
                        className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden flex flex-col cursor-pointer w-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                      >
                        {/* Image Section */}
                        <motion.div

                          className="h-48">
                          <img
                            src={song.imageURL} // Ensure each song object includes an `imageURL` property
                            alt={song.title}
                            className="object-cover w-full h-full"
                          />
                        </motion.div>

                        {/* Content Section */}
                        <div className="p-4 flex-grow flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl font-bold mb-2">{song.title}</h3>
                            <p className="text-sm text-gray-600">
                              {song.description}
                              <br />
                              Pricing: {song.priceType}
                              {song.price && ` - $${song.price}`}
                            </p>
                          </div>
                          <button

                            className="mt-4 w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                          >
                            View Songs
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>


              {/* Merchandise Section */}
              <motion.div
                ref={ref3}
                variants={fadeInUp}
                initial="hidden"
                animate={controls3}
                transition={{ "duration": 2 }}
                id="merchandise">
                <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8">
                  <div className='w-auto bg-[#f7f5fb] text-[#0a2c6b] p-[5px] mb-5 rounded-lg'>
                    <h2 className="text-3xl font-bold text-center  ">Merchandise</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                    {merchandise.map((merc) => (
                      <div
                        key={merc.merchId}
                        className="bg-white bg-opacity-90 rounded-lg shadow-lg flex flex-col overflow-hidden cursor-pointer w-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                      >
                        {/* Image Section */}
                        <div className="h-48 ">
                          <img
                            src={merc.imageURL} // Ensure each merchandise object includes an `imageURL` property
                            alt={merc.merchName}
                            className="object-cover w-full h-full"
                          />
                        </div>

                        {/* Content Section */}
                        <div className="p-4 flex-grow flex flex-col justify-between ">
                          <div>
                            <h3 className="text-xl font-bold mb-2">{merc.merchName}</h3>
                            <p className="text-sm text-gray-600">
                              {merc.merchDescription}
                              <br />
                              Price: ${merc.price}
                              <br />
                              Type: {merc.merchType}
                            </p>
                          </div>
                          <button

                            className="mt-4 w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                          >
                            View Bundle
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Messages Section */}
              <motion.div
                ref={ref4}
                variants={fadeInUp}
                initial="hidden"
                animate={controls4}
                transition={{ "duration": 2 }}
                id="messages">
                {fanMessages && (
                  <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8">
                    <div className='w-auto bg-[#f7f5fb] text-[#0a2c6b] p-[5px] mb-5 rounded-lg'>
                      <h2 className="text-3xl font-bold text-center">Fan Messages</h2>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ "duration": 0.5 }}
                      className="div">
                      <Card className="mb-4">
                        <CardHeader>
                          <CardTitle>Message Me</CardTitle>
                          <CardDescription>
                            {fanMessages.title}
                            <br />
                            {fanMessages.description}
                            <br />
                            Promised Reply Time: {fanMessages.promisedReplyTime} hours
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button className="mt-2 relative hover:bg-white hover:text-black no-underline hover:tracking-wider px-4 py-3 hover:before:scale-x-75 before:scale-x-0 before:origin-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-black before:transition-transform before:duration-300 before:ease-linear "

                          >
                            Send Message
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                )}
              </motion.div>
              {/* Support Section */}
              <motion.div
                ref={ref5}
                variants={fadeInUp}
                initial="hidden"
                animate={controls5}
                transition={{ "duration": 2 }}
                id="support">
                {supportPage && (
                  <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8">
                    <div className='w-auto bg-[#f7f5fb] text-[#0a2c6b] p-[5px] mb-5 rounded-lg'>
                      <h2 className="text-3xl font-bold text-center ">Support Me</h2>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ "duration": 0.5 }}

                      className="div">


                      <Card className="mb-4 ">
                        <CardHeader>
                          <CardTitle className="">Support</CardTitle>
                          <CardDescription className='flex-row flex'>
                            {supportPage.title}
                            <FaHandHoldingHeart className='mx-2 text-blue-900 text-lg' />
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button className="mt-2 relative hover:bg-white hover:text-black no-underline hover:tracking-wider px-4 py-3 hover:before:scale-x-75 before:scale-x-0 before:origin-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-black before:transition-transform before:duration-300 before:ease-linear "

                          >
                            Support
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </ScrollArea>
          </div>
        </div>
      </motion.div>
    </div >
  );
};

export default LandingPageView1;
