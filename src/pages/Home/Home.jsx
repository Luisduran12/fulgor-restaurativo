import Seo from '../../components/seo/Seo'
import ActionAreas from '../../components/sections/ActionAreas'
import ActivityTeaser from '../../components/sections/ActivityTeaser'
import CTA from '../../components/sections/CTA'
import FeaturedPrograms from '../../components/sections/FeaturedPrograms'
import Hero from '../../components/sections/Hero'
import ImpactCounters from '../../components/sections/ImpactCounters'
import MissionSummary from '../../components/sections/MissionSummary'

function Home() {
  return (
    <>
      <Seo path="/" />
      <Hero />
      <MissionSummary />
      <ActionAreas />
      <FeaturedPrograms />
      <ImpactCounters />
      <ActivityTeaser />
      <CTA />
    </>
  )
}

export default Home
