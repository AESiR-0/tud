import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface VideoComparisonProps {
    beforeVideo: string;
    afterVideo: string;
    className?: string;
}

export default function VideoComparison({ beforeVideo, afterVideo, className = "" }: VideoComparisonProps) {
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const beforeVideoRef = useRef<HTMLVideoElement>(null);
    const afterVideoRef = useRef<HTMLVideoElement>(null);
    const x = useMotionValue(0);
    const width = useTransform(x, [0, 100], ["0%", "100%"]);
    const [hasTransitioned, setHasTransitioned] = useState(false);

    useEffect(() => {
        if (beforeVideoRef.current && afterVideoRef.current) {
            // Set initial position to show only before video
            x.set(0);

            // Start both videos
            beforeVideoRef.current.play();
            afterVideoRef.current.play();

            // Set up one-time transition after 3 seconds
            const transitionTimeout = setTimeout(() => {
                if (!hasTransitioned) {
                    // Animate to show after video
                    x.set(100);
                    setHasTransitioned(true);
                }
            }, 2500);

            return () => clearTimeout(transitionTimeout);
        }
    }, [hasTransitioned]);

    const handleDrag = (event: any, info: any) => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const percentage = (info.point.x / containerWidth) * 100;
            x.set(Math.max(0, Math.min(100, percentage)));
        }
    };

    return (
        <div className="flex justify-center items-center w-full">
            <div 
                className={`relative w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] aspect-[9/16] rounded-lg overflow-hidden ${className}`} 
                ref={containerRef}
            >
                {/* Before Video */}
                <video
                    ref={beforeVideoRef}
                    className="absolute inset-0 w-full h-full aspect-[9/16] object-cover"
                    src={beforeVideo}
                    loop
                    muted
                    playsInline
                    autoPlay
                />

                {/* After Video (Clipped) */}
                <div className="absolute inset-0 overflow-hidden" style={{ width: width.get() }}>
                    <video
                        ref={afterVideoRef}
                        className="absolute inset-0 w-full h-full aspect-[9/16] object-cover"
                        src={afterVideo}
                        loop
                        muted
                        playsInline
                        autoPlay
                    />
                </div>

                {/* Slider Line */}
                <motion.div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                    style={{ left: width }}
                    drag="x"
                    dragConstraints={containerRef}
                    dragElastic={0}
                    dragMomentum={false}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={() => setIsDragging(false)}
                    onDrag={handleDrag}
                    animate={hasTransitioned ? { left: "100%" } : {}}
                    transition={{ duration: 2, ease: "easeInOut" }}
                >
                    {/* Slider Handle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow rounded-full" />
                    </div>
                </motion.div>

                {/* Labels */}
                <div className="absolute bottom-4 left-0 bg-black/50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                    Green Screen
                </div>
                <div className="absolute bottom-4 right-0 bg-black/50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                    To Ai Generated
                </div>
            </div>
        </div>
    );
} 