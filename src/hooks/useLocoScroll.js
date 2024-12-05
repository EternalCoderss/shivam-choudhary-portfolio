import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function useLocoScroll() {
    useEffect(() => {
        let locoScroll = null;

        const initScroll = () => {
            locoScroll = new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true,
                smoothMobile: true,
                multiplier: 0.8,
                lerp: 0.08,
                class: 'is-revealed',
            });

            locoScroll.on('scroll', () => {
                // Update scroll position or trigger animations
            });

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        locoScroll.scrollTo(target, {
                            offset: -100,
                            duration: 1500,
                            easing: [0.25, 0.00, 0.35, 1.00],
                        });
                    }
                });
            });
        };

        setTimeout(initScroll, 100);

        return () => {
            if (locoScroll) {
                locoScroll.destroy();
            }
        };
    }, []);
} 