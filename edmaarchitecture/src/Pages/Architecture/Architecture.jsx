import React from 'react'
import './architecture.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ProjectProp from '../../Components/ProjectProp/ProjectProp'
import Grid from '@mui/material/Grid';

const Architecture = () => {
  return (
    <div className='architecture'>
        <Navbar/>
        <div className='archwrapper' >
        <Grid container spacing={2}>
           <Grid item xs={12}>
            <ProjectProp
            title='-ARCHITECTURE-'
            desc='Our priority is to design the best facilities and buildings for living,
            working, and leisure. We develop projects from conceptual design to final details,
            based on customer requirements and taking into account construction criteria and conditions,
            with the sole aim of ensuring the continuity of the conceptual design and the building with high quality.
            Good design, based on on-site perception, is the key to adequate and high-quality design. 
            In this field of activity, our professional team of experienced architects, structural engineers,
            civil engineers, and detail planners plans above-ground structures equipped with a high technical standard.
            We comprehensively manage such projects in all phases, adhering to Swiss standards for healthcare, education,
            sports, administrative, hotel, and industrial buildings.'
            button='VIEW PROJECTS'
            />
            </Grid>
            <Grid item xs={12}>
            <ProjectProp
            title='-ENERGY EFFICIENCY & RENEWABLE ENERGY-'
            desc='Energy efficiency simply means using less energy to perform the same task – that is, 
            eliminating energy waste. Energy efficiency brings a variety of benefits: reducing greenhouse gas emissions, 
            reducing demand for energy imports, and lowering costs on a household and economy-wide level. 
            While renewable energy technologies also help accomplish these objectives, 
            improving energy efficiency is the cheapest – and often the most immediate – way to reduce the use of fossil fuels. 
            There are enormous opportunities for efficiency improvements in every sector of the economy, whether it is buildings, 
            transportation, industry, or energy generation. Buildings are an important field for energy efficiency improvements around the world because of their role as a major energy consumer. 
            However, the question of energy use in buildings is not straightforward as the indoor conditions that can be achieved with energy use vary a lot. 
            The measures that keep buildings comfortable, including lighting, heating, cooling, and ventilation, all consume energy. Typically, the level of energy efficiency in a building 
            is measured by dividing energy consumed by the floor area of the building, which is referred to as specific energy consumption (SEC) or energy use intensity (EUI).'
            button='VIEW PROJECTS'
            />
            </Grid>
            <Grid item xs={12}>
            <ProjectProp
            title='-WATER & INFRASTRUCTURE-'
            desc="Infrastructure is the fundamental facilities and systems serving a country, city,
            or other area, including the services and facilities necessary for its economy to function. 
            Infrastructure is composed of public and private physical improvements such as roads, railways, bridges, 
            tunnels, water supply, sewers, electrical grids, and telecommunications (including Internet connectivity and 
            broadband speeds). In general, it has also been defined as 'the physical components of interrelated systems 
            providing commodities and services essential to enable, sustain, or enhance societal living conditions.' 
            There are two general ways to view infrastructure: hard or soft. Hard infrastructure refers to the physical 
            networks necessary for the functioning of a modern industry, including roads, bridges, railways, etc. 
            Soft infrastructure refers to all the institutions that maintain the economic, health, social, and cultural 
            standards of a country, including educational programs, official statistics, parks and recreational 
            facilities, law enforcement agencies, and emergency services. Infrastructure is the term for the basic 
            physical systems of a business or nation—transportation, communication, sewage, water, and electric systems 
            are all examples of infrastructure. These systems tend to be high-cost investments and are vital to a country's 
            economic development and prosperity. Projects related to infrastructure improvements may be funded publicly, privately, 
            or through public-private partnerships. In economic terms, infrastructure often involves the production of public goods 
            or production processes that support natural monopolies."
            button='VIEW PROJECTS'
            />
            </Grid>
        </Grid>
        </div>
        <Footer/>
    </div>
  )
}

export default Architecture