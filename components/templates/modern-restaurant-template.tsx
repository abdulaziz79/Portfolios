"use client";

import { motion } from "framer-motion";
import { Star, Clock, MapPin, Phone, ChefHat, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
}

interface RestaurantData {
  name: string;
  title: string;
  about: string;
  email: string;
  phone: string;
  location: string;
  profileImage: string;
  hours: string;
  cuisine: string;
  menu: MenuItem[];
  socialLinks: {
    instagram: string;
    facebook: string;
    website: string;
  };
}

interface ModernRestaurantTemplateProps {
  data: RestaurantData;
}

export function ModernRestaurantTemplate({
  data,
}: ModernRestaurantTemplateProps) {
  const menuCategories = [
    ...new Set(data.menu?.map((item) => item.category) || []),
  ];
  console.log(data);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-amber-900/10 dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-amber-200/50 dark:border-amber-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <ChefHat className="h-8 w-8 text-amber-600" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {data.name}
              </h1>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors"
              >
                About
              </a>
              <a
                href="#menu"
                className="text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors"
              >
                Menu
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors"
              >
                Contact
              </a>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Reserve Table
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-orange-600/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span style={{ color: "#ffffff" }}>Exquisite</span>
                <span
                  className="block text-amber-600"
                  style={{ color: "#d97706" }}
                >
                  Dining
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {data.about}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                  style={{ color: "#ffffff" }}
                >
                  <Utensils className="mr-2 h-5 w-5" />
                  View Menu
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent"
                  style={{ color: "#ffffff", borderColor: "#ffffff" }}
                >
                  Make Reservation
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{data.hours || "11:00 AM - 10:00 PM"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span>4.8 (250+ reviews)</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent z-10"></div>
                <img
                  src={data.profileImage || "/elegant-restaurant-interior.jpg"}
                  alt={data.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 bg-white/50 dark:bg-gray-800/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <ChefHat className="h-16 w-16 text-amber-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Expert Chefs
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our world-class chefs bring years of experience and passion to
                every dish.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Utensils className="h-16 w-16 text-amber-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Fresh Ingredients
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We source only the finest, freshest ingredients from local farms
                and suppliers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <Star className="h-16 w-16 text-amber-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Award Winning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Recognized for excellence in cuisine and service by top culinary
                institutions.
              </p>
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
            className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          >
            Our Menu
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
                  <h3 className="text-3xl font-bold mb-8 text-center text-amber-600">
                    {category}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {data.menu
                      ?.filter((item) => item.category === category)
                      .map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -20 : 20,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                            <CardContent className="p-6">
                              <div className="flex justify-between items-start mb-3">
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 transition-colors">
                                  {item.name}
                                </h4>
                                <span className="text-2xl font-bold text-amber-600">
                                  {item.price}
                                </span>
                              </div>
                              <p className="text-gray-600 dark:text-gray-300">
                                {item.description}
                              </p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400">
              <p className="text-xl">Menu coming soon...</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-r from-amber-600 to-orange-600"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-8 text-white"
          >
            Visit Us Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-amber-100 mb-12"
          >
            Experience exceptional dining in the heart of the city. Reservations
            recommended.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center gap-3 text-white">
              <MapPin className="h-8 w-8" />
              <div>
                <h4 className="font-bold text-lg">Location</h4>
                <p className="text-amber-100">{data.location}</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 text-white">
              <Phone className="h-8 w-8" />
              <div>
                <h4 className="font-bold text-lg">Phone</h4>
                <p className="text-amber-100">{data.phone}</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 text-white">
              <Clock className="h-8 w-8" />
              <div>
                <h4 className="font-bold text-lg">Hours</h4>
                <p className="text-amber-100">
                  {data.hours || "11:00 AM - 10:00 PM"}
                </p>
              </div>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-white text-amber-600 hover:bg-amber-50 font-bold"
          >
            Make a Reservation
          </Button>
        </div>
      </section>
    </div>
  );
}
