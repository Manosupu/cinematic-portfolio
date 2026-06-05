'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { BASE_PATH } from '@/lib/siteConfig'
import { gsap } from '@/lib/gsap'
import profile from '@/data/profile.json'
import styles from '@/styles/sections/ServicesSection.module.css'

const SERVICES = profile.services || []

export default function ServicesSection() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const section = sectionRef.current
    if (!section || SERVICES.length === 0) return

    // Simple entrance animation
    gsap.fromTo(cardsRef.current, 
      { y: 50, opacity: 0 }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
        }
      }
    )
  }, [])

  if (SERVICES.length === 0) return null

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>Expertise</span>
        <h2 className={styles.title}>What I Do</h2>
      </div>

      <div className={styles.grid}>
        {SERVICES.map((service, i) => (
          <div 
            key={service.id} 
            className={styles.card}
            ref={el => { cardsRef.current[i] = el }}
          >
            <div className={styles.bgWrap}>
              <Image
                src={`${BASE_PATH}${service.image}`}
                alt={service.title}
                fill
                quality={90}
                unoptimized
                className={styles.bgImg}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.overlay} />
            </div>
            
            <div className={styles.content}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceSubtitle}>{service.subtitle}</p>
              <p className={styles.serviceDesc}>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
