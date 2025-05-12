import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Clock, Zap, TrendingUp, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const mediaItems = [
    {
        title: "Product Details",
        description: "AI video for TechGadgets Inc. smart home launch.",
        video: "/everything_ai_media/Ai ad agency revised .mp4",
        metrics: [
            { label: "Views", value: "2.5M+" },
            { label: "Engagement", value: "85%" }
        ],
        category: "Marketing",
        duration: "0:31"
    },
    {
        title: "Ai video for case study on Britannia's tactics",
        description: "AI avatars for EduTech's multi-language tutorials.",
        video: "/everything_ai_media/Britannia ver4.mp4",
        metrics: [
            { label: "Languages", value: "8+" },
            { label: "Completion", value: "92%" }
        ],
        category: "Education",
        duration: "1:08"
    }
];

export default function Media() {
    // Track mute state for each video
    const [muted, setMuted] = useState<boolean[]>([true, true]);
    const videoRefs: React.RefObject<HTMLVideoElement>[] = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];

    const handleToggleMute = (idx: number) => {
        const newMuted = [...muted];
        newMuted[idx] = !newMuted[idx];
        setMuted(newMuted);
        if (videoRefs[idx].current) {
            videoRefs[idx].current!.muted = newMuted[idx];
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                        Work Show Case
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        See how we're making and helping businesses transform their video content with AI
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-start justify-center">
                    {mediaItems.map((item, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex-1 flex flex-col items-center"
                        >
                            <Card className="group overflow-visible bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 w-[280px] md:w-[320px]">
                                <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px] mx-auto">
                                    <div className="absolute inset-[2%] overflow-hidden rounded-[2.5rem] z-0 cursor-pointer group"
                                        onClick={() => handleToggleMute(index)}
                                    >
                                        <video
                                            ref={videoRefs[index]}
                                            src={item.video}
                                            autoPlay
                                            loop
                                            playsInline
                                            muted={muted[index]}
                                            className="w-full h-full object-cover"
                                            style={{ aspectRatio: '9/16', background: '#000' }}
                                        />
                                        <div className="absolute top-3 right-3 z-20">
                                            {muted[index] ? (
                                                <VolumeX className="w-6 h-6 text-white/80 bg-black/60 rounded-full p-1" />
                                            ) : (
                                                <Volume2 className="w-6 h-6 text-white/80 bg-black/60 rounded-full p-1" />
                                            )}
                                        </div>
                                        <div className="absolute bottom-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-xs z-20">
                                            {item.duration}
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-4 text-center">
                                    <div className="flex items-center gap-2 justify-center mb-2">
                                        <span className="text-xs font-medium text-gray-500">{item.category}</span>
                                        <span className="text-gray-300">•</span>
                                        <span className="text-xs text-gray-500">{item.duration}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 mb-2 text-xs">
                                        {item.description}
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {item.metrics.map((metric, idx: number) => (
                                            <motion.div
                                                key={idx}
                                                className="bg-gray-50 rounded-lg p-2 flex items-center gap-1"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            >
                                                <div className="text-blue-600">
                                                    {idx === 0 ? <TrendingUp className="w-4 h-4" /> : <Zap className="w-4 h-4" />}
                                                </div>
                                                <div>
                                                    <div className="text-xs font-medium text-gray-900">{metric.value}</div>
                                                    <div className="text-[10px] text-gray-500">{metric.label}</div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                {/* Coming Soon Card below videos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center mt-12"
                >
                    <Card className="group overflow-hidden bg-gray-50/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 w-[280px] md:w-[320px]">
                        <CardContent className="p-8 text-center">
                            <motion.div
                                className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 1 }}
                            >
                                <Clock className="w-8 h-8 text-gray-400" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                More Success Stories Coming Soon
                            </h3>
                            <p className="text-gray-600 text-sm">
                                We're working on more amazing AI-generated video projects. Stay tuned!
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
} 