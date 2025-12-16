export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "understanding-geotechnical-investigations-nepal",
    title: "Understanding Geotechnical Investigations in Nepal",
    excerpt: "A comprehensive guide to soil testing, foundation analysis, and why geotechnical investigations are critical for construction projects in Nepal's diverse terrain.",
    category: "Technical Guide",
    author: "SA Technical Team",
    authorRole: "Geotechnical Engineering Division",
    date: "Dec 8, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: true,
    tags: ["Geotechnical", "Soil Testing", "Foundation", "Nepal"],
    content: `
## Introduction to Geotechnical Investigations

Geotechnical investigations form the backbone of any construction project. In Nepal's diverse geological landscape—from the Terai plains to the Himalayan highlands—understanding subsurface conditions is not just important; it's essential for project success and structural safety.

At South Asia Materials Science and Engineering Research (SA), we've conducted thousands of geotechnical investigations across Nepal, helping engineers and developers make informed decisions about their construction projects.

## Why Geotechnical Investigations Matter

Before any construction begins, you need to understand what lies beneath the surface. Nepal's terrain presents unique challenges:

- **Seismic Activity**: Located in one of the most seismically active regions in the world, Nepal requires careful consideration of earthquake resistance in all construction.
- **Varied Soil Types**: From alluvial deposits in the Terai to weathered rock in the hills, soil conditions vary dramatically.
- **Water Table Concerns**: Groundwater levels significantly impact foundation design and construction methods.
- **Slope Stability**: Hilly terrain requires careful analysis to prevent landslides and ensure long-term stability.

## Key Components of a Geotechnical Investigation

### 1. Desk Study and Site Reconnaissance

Before any drilling begins, our team conducts thorough research:

- Review of existing geological maps and reports
- Analysis of historical data and previous investigations in the area
- Site walkover to identify visible features and potential concerns
- Assessment of neighboring structures and their foundation systems

### 2. Subsurface Investigation Methods

**Drilling and Boring**

The most common method involves drilling boreholes to collect soil samples at various depths. We use different drilling techniques depending on soil conditions:

- Rotary drilling for rock formations
- Auger drilling for soft to medium soils
- Percussion drilling for hard or gravelly soils

**Standard Penetration Test (SPT)**

This widely-used test measures soil resistance by counting the number of blows required to drive a sampler a specific distance. SPT values help engineers:

- Classify soil strength
- Estimate bearing capacity
- Design appropriate foundations

**Cone Penetration Test (CPT)**

CPT provides continuous soil profiling by measuring resistance as a cone is pushed into the ground. This test is particularly valuable for:

- Identifying soil layer boundaries
- Detecting soft zones
- Assessing liquefaction potential

### 3. Laboratory Testing

Soil samples collected from the field undergo rigorous laboratory analysis:

- **Grain Size Analysis**: Determines soil classification
- **Atterberg Limits**: Measures plasticity characteristics
- **Shear Strength Tests**: Evaluates soil's resistance to failure
- **Consolidation Tests**: Predicts settlement behavior
- **Chemical Analysis**: Identifies potentially harmful substances

## Interpreting Results for Foundation Design

The data collected during geotechnical investigations directly influences:

> "A thorough geotechnical investigation is not an expense—it's an investment that prevents costly failures and ensures the safety of structures for generations."

### Bearing Capacity Determination

Based on soil properties, we calculate the safe bearing capacity—the maximum load the soil can support without failure. This determines:

- Foundation type (shallow vs. deep)
- Foundation dimensions
- Required reinforcement

### Settlement Analysis

Understanding how much a structure will settle over time is crucial. Excessive or differential settlement can cause:

- Structural cracks
- Door and window misalignment
- Utility connection failures
- Long-term serviceability issues

## Best Practices for Nepal's Conditions

Given Nepal's unique challenges, we recommend:

1. **Always conduct site-specific investigations**—don't rely solely on neighboring project data
2. **Consider seismic design requirements** from the earliest planning stages
3. **Investigate deeper than minimum requirements** in areas with variable soil conditions
4. **Include groundwater monitoring** especially in Terai and valley areas
5. **Engage qualified professionals** for both investigation and interpretation

## Conclusion

Geotechnical investigations are not optional—they're fundamental to safe, successful construction in Nepal. Whether you're planning a small residential building or a major infrastructure project, understanding your site's subsurface conditions is the first step toward a structure that will stand the test of time.

At SA, we combine advanced testing equipment with decades of local experience to provide comprehensive geotechnical services. Contact us to discuss your project's requirements.
    `
  },
  {
    id: 2,
    slug: "ndt-crucial-building-safety",
    title: "Why NDT is Crucial for Building Safety",
    excerpt: "Learn how Non-Destructive Testing methods help assess structural integrity without causing damage to existing structures.",
    category: "Industry Insights",
    author: "SA Technical Team",
    authorRole: "NDT Specialists",
    date: "Dec 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: false,
    tags: ["NDT", "Structural Testing", "Building Safety", "Quality Assurance"],
    content: `
## What is Non-Destructive Testing?

Non-Destructive Testing (NDT) encompasses a variety of analysis techniques used to evaluate the properties of materials, components, or structures without causing damage. In the construction industry, NDT has become indispensable for assessing existing structures and ensuring quality control during construction.

## The Importance of NDT in Nepal

Following the 2015 earthquake, the importance of structural assessment became painfully clear. Many buildings that appeared intact on the surface had suffered significant internal damage. NDT provides the tools to:

- Assess post-disaster structural integrity
- Evaluate aging infrastructure
- Verify construction quality
- Detect hidden defects before they become dangerous

## Common NDT Methods for Buildings

### Rebound Hammer Test (Schmidt Hammer)

This simple yet effective test measures concrete surface hardness, which correlates to compressive strength. The advantages include:

- Quick and portable testing
- Immediate results
- Cost-effective screening tool
- No damage to the structure

However, it's important to understand limitations—surface conditions, moisture, and carbonation can affect readings.

### Ultrasonic Pulse Velocity (UPV) Test

UPV testing uses sound waves to assess concrete quality:

- Detects internal cracks and voids
- Evaluates uniformity of concrete
- Estimates strength relationships
- Identifies deterioration zones

> "UPV testing can reveal what's hidden beneath the surface—cracks, voids, and deterioration that visual inspection would miss."

### Cover Meter / Rebar Locator

Determining the location, depth, and diameter of reinforcement is essential for:

- Verifying design compliance
- Planning repair work
- Assessing corrosion risk
- Ensuring adequate cover depth

### Corrosion Detection

Steel reinforcement corrosion is a leading cause of concrete deterioration. Testing methods include:

- Half-cell potential mapping
- Resistivity measurements
- Carbonation depth testing
- Chloride content analysis

## When to Use NDT

### During Construction

Quality control during construction prevents future problems:

- Verify concrete strength at various ages
- Confirm rebar placement
- Check for segregation or honeycombing
- Ensure proper curing

### For Existing Structures

Assessment of existing buildings helps:

- Evaluate safety for continued use
- Plan renovation or strengthening
- Assess earthquake damage
- Investigate structural concerns

### Before Purchase or Renovation

Property buyers and renovators benefit from:

- Independent structural assessment
- Identification of hidden defects
- Documentation of existing conditions
- Informed decision-making

## Integrating NDT with Other Assessment Methods

While NDT provides valuable data, comprehensive structural assessment often requires:

1. **Visual Inspection**: The starting point for any assessment
2. **Document Review**: Original drawings and specifications
3. **NDT Testing**: Quantitative data on material properties
4. **Load Testing**: Verification of structural performance
5. **Analysis**: Engineering evaluation of collected data

## The SA Approach to NDT

At South Asia Materials Testing, our NDT services are conducted by trained technicians using calibrated equipment. We provide:

- Comprehensive testing protocols
- Detailed reporting with interpretations
- Recommendations for further investigation
- Support for engineering decisions

## Conclusion

Non-destructive testing is not just a diagnostic tool—it's a crucial component of structural safety management. Whether you're constructing new buildings, maintaining existing infrastructure, or assessing property conditions, NDT provides the insights needed for informed decisions.

Contact SA to discuss how our NDT services can support your project.
    `
  },
  {
    id: 3,
    slug: "complete-guide-concrete-testing-standards",
    title: "Complete Guide to Concrete Testing Standards",
    excerpt: "Everything you need to know about concrete quality testing, from compression tests to durability assessments following Nepal Standards.",
    category: "Technical Guide",
    author: "SA Technical Team",
    authorRole: "Materials Testing Division",
    date: "Dec 1, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: false,
    tags: ["Concrete", "Testing Standards", "Quality Control", "Construction Materials"],
    content: `
## Introduction to Concrete Testing

Concrete is the most widely used construction material in Nepal, forming the backbone of our buildings, bridges, and infrastructure. Ensuring its quality through systematic testing is essential for structural safety and durability.

This guide covers the essential concrete tests, their procedures, and how to interpret results according to Nepal Standards and international best practices.

## Fresh Concrete Tests

Before concrete hardens, several tests verify that the mix meets specifications:

### Slump Test

The slump test measures concrete workability—its ease of placement and compaction.

**Procedure:**
1. Fill a standard slump cone in three layers
2. Rod each layer 25 times
3. Lift the cone vertically
4. Measure the difference in height (slump)

**Typical Values:**
- Low slump (25-50mm): Pavements, mass concrete
- Medium slump (50-100mm): General construction
- High slump (100-150mm): Pumped concrete, congested reinforcement

### Air Content Test

Entrained air improves freeze-thaw resistance. The pressure method provides quick, accurate results for air content verification.

### Temperature Test

Concrete temperature affects:
- Setting time
- Strength development
- Risk of thermal cracking

## Hardened Concrete Tests

### Compressive Strength Testing

The most fundamental quality indicator, compression testing involves:

**Specimen Preparation:**
- Standard cubes: 150mm × 150mm × 150mm
- Cylinders: 150mm diameter × 300mm height (international standard)

**Testing Procedure:**
1. Cure specimens under standard conditions
2. Test at specified ages (typically 7 and 28 days)
3. Apply load at controlled rate until failure
4. Calculate compressive strength

**Interpreting Results:**

> "A single low result doesn't necessarily indicate failure. Statistical analysis of multiple specimens provides the true picture of concrete quality."

Characteristic strength (fck) represents the value below which not more than 5% of test results fall.

### Flexural Strength Test

For pavements and slabs, flexural strength (modulus of rupture) is often more relevant than compressive strength. This test uses beam specimens loaded at third points.

### Split Tensile Test

An indirect measure of tensile strength, this test applies load along the diameter of a cylinder, causing tensile failure along the vertical plane.

## Durability Tests

### Water Permeability

Low permeability is essential for:
- Marine structures
- Water-retaining structures
- Underground construction

### Rapid Chloride Permeability Test (RCPT)

This test indicates concrete's resistance to chloride ion penetration, crucial for structures exposed to deicing salts or marine environments.

### Carbonation Testing

Carbonation depth testing reveals:
- Rate of carbonation front advancement
- Remaining protection for reinforcement
- Need for protective measures

## Non-Destructive Testing on Concrete

### Rebound Hammer

Correlates surface hardness to compressive strength. Useful for:
- Comparative assessment
- Identifying weak zones
- Quality screening

### Ultrasonic Pulse Velocity

Evaluates internal quality by measuring sound transmission speed through concrete.

### Core Testing

When in-situ strength verification is required, cores provide direct measurement:

**Core Extraction Procedure:**
1. Locate suitable coring positions (away from reinforcement)
2. Extract cores of appropriate diameter
3. Process and cap specimens
4. Test in compression

**Correction Factors:**

Results require adjustment for:
- Length/diameter ratio
- Direction of drilling vs. casting
- Presence of reinforcement
- Moisture condition

## Quality Control Statistics

### Acceptance Criteria

For structural concrete, both mean and minimum criteria must be satisfied:

**Mean Strength:** fck + 1.65 × standard deviation
**Minimum Individual:** fck - 3 MPa (for standard deviation ≤ 4 MPa)

### Control Charts

Ongoing production quality monitoring uses:
- Cusum charts for trend detection
- Range charts for consistency evaluation
- Moving average plots for overall quality tracking

## Common Testing Mistakes to Avoid

1. **Improper Curing**: Specimens must be cured under standard conditions
2. **Incorrect Sampling**: Samples should represent the batch, not just surface material
3. **Equipment Calibration**: Testing machines require regular calibration
4. **Timing Errors**: Test at correct ages with minimal tolerance
5. **Documentation Gaps**: Complete records are essential for traceability

## SA Testing Services

Our concrete testing laboratory offers:

- Fresh concrete testing at your site
- Full hardened concrete testing program
- Mix design and optimization
- Forensic investigation
- Expert consultation

All testing follows relevant standards with full documentation and interpretation support.

## Conclusion

Systematic concrete testing is not bureaucratic overhead—it's insurance for structural safety. Understanding what tests to perform, when to perform them, and how to interpret results ensures that concrete structures will serve their intended purpose safely for their design life.

Contact SA for comprehensive concrete testing services tailored to your project needs.
    `
  },
  {
    id: 4,
    slug: "foundation-testing-when-why-necessary",
    title: "Foundation Testing: When and Why It's Necessary",
    excerpt: "Discover the importance of pile load testing and how it ensures the safety and longevity of your construction projects.",
    category: "Case Study",
    author: "SA Technical Team",
    authorRole: "Foundation Testing Division",
    date: "Nov 28, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: false,
    tags: ["Foundation", "Pile Testing", "Load Test", "Structural Safety"],
    content: `
## The Foundation of Safe Construction

Every structure, no matter how magnificent above ground, depends on its foundation for stability. Foundation testing verifies that this critical element will perform as designed, protecting both investment and lives.

## Types of Foundation Testing

### Static Pile Load Test

The gold standard for pile capacity verification:

**Maintained Load Test:**
- Load applied in increments
- Settlement measured at each stage
- Held at test load for specified duration
- Provides complete load-settlement relationship

**Quick Load Test:**
- Rapid loading sequence
- Suitable for preliminary assessment
- Lower cost alternative

### Dynamic Pile Load Test

High-strain dynamic testing offers:

- Rapid assessment of multiple piles
- Cost-effective compared to static testing
- Immediate results
- Assessment of installation quality

**How It Works:**
1. Impact pile with heavy ram
2. Measure force and acceleration
3. Analyze wave propagation
4. Calculate capacity using signal matching

### Pile Integrity Testing (PIT)

Low-strain integrity testing detects:

- Cracks or breaks
- Necking (reduced cross-section)
- Soil inclusions
- Pile length verification

> "Pile integrity testing can identify defects that would be catastrophic under load—defects invisible from the surface."

## When Is Foundation Testing Required?

### Design Verification

- Confirm design assumptions
- Validate geotechnical parameters
- Optimize pile lengths
- Verify construction methods

### Quality Assurance

- Construction quality confirmation
- Contract compliance
- Performance documentation
- Risk management

### Problem Investigation

- Suspected defects
- Settlement issues
- Capacity concerns
- Damage assessment

## Case Study: Highway Bridge Project

A recent highway bridge project in Nepal illustrates the value of comprehensive foundation testing:

**Project Details:**
- 12 bridge piers
- Bored piles, 1.2m diameter
- Design capacity: 8,000 kN per pile

**Testing Program:**
- 100% PIT testing of all production piles
- 2% static load testing
- 5% high-strain dynamic testing

**Findings:**
- 3 piles showed integrity defects requiring remediation
- Actual capacity 15% higher than design
- Construction quality confirmed for acceptance

**Value Added:**
- Prevented potential failure of defective piles
- Confirmed safety margins
- Provided documentation for project records

## Interpreting Test Results

### Load-Settlement Curves

Static load tests produce curves showing:
- Elastic behavior zone
- Plastic deformation
- Ultimate capacity indicators

### Failure Criteria

Different standards define failure differently:

- **Davisson Offset**: Commonly used, defines failure as settlement exceeding elastic compression plus offset
- **90% Peak**: Load at 90% of ultimate on reload cycle
- **Settlement Limit**: Maximum acceptable settlement under working load

### Safety Factors

Design incorporates safety factors accounting for:
- Test-to-production variability
- Loading uncertainties
- Consequence of failure
- Site-specific considerations

## Planning a Testing Program

### How Many Piles to Test?

Factors influencing test quantity:

1. Project size and pile quantity
2. Site variability
3. Risk tolerance
4. Code requirements
5. Previous experience

### Test Pile vs. Production Pile

**Preliminary Test Piles:**
- Tested before production
- May be loaded to failure
- Used to optimize design

**Working Test Piles:**
- Selected production piles
- Tested to proof load only
- Become part of final structure

## Cost-Benefit Analysis

While testing represents additional project cost, the benefits include:

- **Risk Reduction**: Prevent catastrophic failures
- **Design Optimization**: Potential for shorter piles or fewer piles
- **Quality Assurance**: Documentation for long-term records
- **Peace of Mind**: Confidence in foundation performance

## SA Foundation Testing Services

Our comprehensive foundation testing includes:

- Static pile load testing (maintained and quick load)
- High-strain dynamic testing with CAPWAP analysis
- Low-strain pile integrity testing
- Pull-out and lateral load testing
- Expert interpretation and reporting

## Conclusion

Foundation testing is not optional for critical structures—it's essential quality assurance that protects both project investment and public safety. Whether you're building a single structure or major infrastructure, proper foundation verification ensures your project starts on solid ground.

Contact SA to discuss your foundation testing requirements.
    `
  },
  {
    id: 5,
    slug: "environmental-testing-construction-compliance",
    title: "Environmental Testing for Construction Compliance",
    excerpt: "Understanding environmental testing requirements for construction projects in Nepal, from water quality to air emissions monitoring.",
    category: "Industry Insights",
    author: "SA Technical Team",
    authorRole: "Environmental Testing Division",
    date: "Nov 22, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: false,
    tags: ["Environmental", "Compliance", "Water Testing", "Air Quality"],
    content: `
## Environmental Responsibility in Construction

Modern construction projects must balance development needs with environmental protection. Environmental testing ensures compliance with regulations while protecting ecosystems and communities.

## Key Environmental Testing Areas

### Water Quality Testing

Construction activities can significantly impact water resources:

**Parameters Tested:**
- pH and temperature
- Dissolved oxygen
- Turbidity and suspended solids
- Heavy metals
- Organic pollutants
- Bacterial contamination

**Sampling Locations:**
- Upstream (baseline)
- Downstream (impact assessment)
- Groundwater wells
- Discharge points

### Air Quality Monitoring

Dust and emissions from construction require monitoring:

**Common Pollutants:**
- Particulate Matter (PM10, PM2.5)
- Sulfur dioxide (SO2)
- Nitrogen oxides (NOx)
- Carbon monoxide (CO)
- Volatile organic compounds

### Soil Testing for Contamination

Before and during construction:

- Heavy metal analysis
- Petroleum hydrocarbons
- Pesticides and herbicides
- pH and salinity

### Noise Monitoring

Construction noise impacts communities:

- Baseline noise levels
- Construction phase monitoring
- Compliance with permissible limits
- Mitigation effectiveness

## Regulatory Framework in Nepal

### Environmental Protection Act

Key requirements include:
- Initial Environmental Examination (IEE) for smaller projects
- Environmental Impact Assessment (EIA) for major projects
- Environmental monitoring during construction
- Compliance reporting

### National Standards

Nepal has established ambient standards for:
- Air quality
- Water quality
- Noise levels
- Effluent discharge

## Testing Protocols

### Sampling Procedures

Proper sampling is crucial for valid results:

> "A test result is only as good as the sample. Proper collection, preservation, and chain of custody are essential."

**Best Practices:**
1. Use appropriate containers
2. Follow preservation requirements
3. Maintain chain of custody
4. Transport within holding times
5. Document conditions

### Laboratory Analysis

Accredited laboratories provide:
- Standardized test methods
- Quality control procedures
- Traceable calibration
- Defensible results

## Monitoring Programs

### Baseline Assessment

Before construction begins:
- Establish pre-project conditions
- Identify existing contamination
- Document sensitive receptors
- Set monitoring points

### Construction Phase

During project execution:
- Regular monitoring schedule
- Incident-triggered sampling
- Trend analysis
- Corrective actions

### Post-Construction

After project completion:
- Verify restoration success
- Confirm compliance
- Document final conditions
- Support closure certification

## Common Compliance Issues

### Dust Control

Prevention and monitoring:
- Water spraying
- Covered loads
- Paved access roads
- PM monitoring

### Erosion and Sedimentation

Control measures:
- Silt fences
- Sediment basins
- Stabilization
- Turbidity monitoring

### Waste Management

Proper handling of:
- Construction debris
- Hazardous materials
- Wastewater
- Contaminated soil

## SA Environmental Services

Our environmental testing capabilities include:

- Complete water quality analysis
- Air quality monitoring
- Soil contamination testing
- Noise level surveys
- Compliance reporting support

## Conclusion

Environmental testing is integral to responsible construction. Beyond regulatory compliance, it protects natural resources and community health. Effective monitoring programs identify issues early, allowing corrective action before significant impact occurs.

Contact SA to develop an environmental monitoring program for your project.
    `
  }
];

export const categories = [
  "Technical Guide",
  "Industry Insights",
  "Case Study",
  "Testing Standards",
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getRelatedPosts(currentId: number, limit: number = 3): BlogPost[] {
  return blogPosts.filter(post => post.id !== currentId).slice(0, limit);
}
