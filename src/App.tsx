import AboutSection from "./components/About/AboutSections"
import StartSection from "./components/Introduction/StartSection"
import LocalizationSection from "./components/Localization/LocalizationSection"
import PlansSection from "./components/Plans/Plans"
import ServiceSection from "./components/Service/Service"



function App() {


  return (
    <main>
    <StartSection/>
    <ServiceSection/>
    <AboutSection/>
    <PlansSection/>
    <LocalizationSection/>
    </main>
  )
}

export default App
