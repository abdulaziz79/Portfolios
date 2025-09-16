"use client"

import { motion } from "framer-motion"
import { Star, Clock, MapPin, Phone, Wine, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  category: string
  image?: string
}

interface RestaurantData {
  name: string
  title: string
  about: string
  email: string
  phone: string
  location: string
  profileImage: string
  hours: string
  cuisine: string
  menu: MenuItem[]
  socialLinks: {
    instagram: string
    facebook: string
    website: string
  }
}

interface ElegantRestaurantTemplateProps {
  data: RestaurantData
}

export function ElegantRestaurantTemplate({ data }: ElegantRestaurantTemplateProps) {
  const menuCategories = [...new Set(data.menu?.map((item) => item.category) || [])]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gold-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <Wine className="h-8 w-8 text-yellow-400" />
              <h1 className="text-2xl font-serif text-yellow-400">{data.name}</h1>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors font-serif">
                About
              </a>
              <a href="#menu" className="text-gray-300 hover:text-yellow-400 transition-colors font-serif">
                Menu
              </a>
              <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors font-serif">
                Contact
              </a>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-serif">Reservations</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
          <img
            src={data.profileImage || "/elegant-restaurant-interior.jpg"}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl lg:text-8xl font-serif mb-6"
            >
              <span className="text-yellow-400">Fine</span>
              <br />
              <span className="text-white">Dining</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-serif"
            >
              {data.about}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-500 hover:text-black font-serif px-8"
              >
                Explore Menu
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-serif px-8 bg-transparent"
              >
                Book Table
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex justify-center items-center gap-8 mt-16"
            >
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-yellow-400" />
                <span className="text-gray-300 font-serif">Michelin Star</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                <span className="text-gray-300 font-serif">5.0 Rating</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-r from-gray-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif text-center mb-16 text-yellow-400"
          >
            Our Story
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
              <p className="text-lg text-gray-300 leading-relaxed mb-6 font-serif">
                For over two decades, we have been crafting extraordinary culinary experiences that celebrate the finest
                ingredients and time-honored techniques.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 font-serif">
                Our commitment to excellence has earned us recognition from the world's most prestigious culinary
                institutions, but our true reward comes from the joy we bring to every guest.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">20+</div>
                  <div className="text-gray-400 font-serif">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">50K+</div>
                  <div className="text-gray-400 font-serif">Happy Guests</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">15</div>
                  <div className="text-gray-400 font-serif">Awards</div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img
                  src="/elegant-restaurant-interior.jpg"
                  alt="Restaurant Interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif text-center mb-16 text-yellow-400"
          >
            Signature Menu
          </motion.h2>

          {menuCategories.length > 0 ? (
            <div className="space-y-16">
              {menuCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.2 }}
                >
                  <h3 className="text-4xl font-serif mb-12 text-center text-white border-b border-yellow-400/30 pb-4">
                    {category}
                  </h3>
                  <div className="space-y-8">
                    {data.menu
                      ?.filter((item) => item.category === category)
                      .map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="group"
                        >
                          <Card className="bg-gray-800/50 border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm">
                            <CardContent className="p-8">
                              <div className="flex justify-between items-start">
                                <div className="flex-1">
                                  <h4 className="text-2xl font-serif text-white group-hover:text-yellow-400 transition-colors mb-3">
                                    {item.name}
                                  </h4>
                                  <p className="text-gray-300 font-serif leading-relaxed">{item.description}</p>
                                </div>
                                <div className="ml-8">
                                  <span className="text-3xl font-serif text-yellow-400">{item.price}</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-400">
              <p className="text-xl font-serif">Our exquisite menu is being prepared...</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif mb-8 text-black"
          >
            Reserve Your Table
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-black/80 mb-12 font-serif"
          >
            Join us for an unforgettable culinary journey. Advance reservations are highly recommended.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center gap-3 text-black">
              <MapPin className="h-8 w-8" />
              <div>
                <h4 className="font-serif font-bold text-lg">Address</h4>
                <p className="text-black/80 font-serif">{data.location}</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 text-black">
              <Phone className="h-8 w-8" />
              <div>
                <h4 className="font-serif font-bold text-lg">Reservations</h4>
                <p className="text-black/80 font-serif">{data.phone}</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 text-black">
              <Clock className="h-8 w-8" />
              <div>
                <h4 className="font-serif font-bold text-lg">Hours</h4>
                <p className="text-black/80 font-serif">{data.hours || "5:00 PM - 11:00 PM"}</p>
              </div>
            </div>
          </div>
          <Button size="lg" className="bg-black text-yellow-400 hover:bg-gray-900 font-serif px-12 py-4 text-lg">
            Book Now
          </Button>
        </div>
      </section>
    </div>
  )
}
