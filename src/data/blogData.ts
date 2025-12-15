export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "understanding-geotechnical-investigations-nepal",
    title: "Understanding Geotechnical Investigations in Nepal",
    excerpt: "A comprehensive guide to soil testing, foundation analysis, and why geotechnical investigations are critical for construction projects in Nepal's diverse terrain.",
    category: "Technical Guide",
    author: "SA Team",
    date: "Dec 8, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: true,
    tags: ["Geotechnical", "Soil Testing", "Foundation", "Nepal"],
    content: `
## Introduction to Geotechnical Investigations

Geotechnical investigations form the backbone of any construction project in Nepal. Given our country's unique geological diversity—from the Terai plains to the challenging Himalayan terrain—understanding soil and rock conditions is not just beneficial; it's essential for safe and sustainable construction.

### Why Geotechnical Investigations Matter

Nepal's varied topography presents unique challenges for construction projects. The country sits on a seismically active zone, making proper foundation design crucial for building safety. Geotechnical investigations help engineers:

- **Determine soil bearing capacity** - Understanding how much load the ground can safely support
- **Identify potential hazards** - Detecting landslide-prone areas, liquefaction risks, and unstable slopes
- **Design appropriate foundations** - Selecting the right foundation type based on soil conditions
- **Plan construction methodologies** - Optimizing excavation and earthwork strategies

## Key Components of Geotechnical Investigations

### 1. Site Reconnaissance

Before any drilling begins, our experts conduct thorough site reconnaissance. This includes:

- Reviewing geological maps and historical data
- Observing surface features and drainage patterns
- Identifying potential problem areas
- Planning borehole locations strategically

### 2. Subsurface Exploration

Our state-of-the-art drilling equipment enables comprehensive subsurface exploration:

**Standard Penetration Test (SPT)**
The SPT is our primary method for determining soil density and consistency. By measuring the number of blows required to drive a sampler into the ground, we can accurately assess soil strength.

**Cone Penetration Test (CPT)**
For continuous soil profiling, CPT provides detailed information about soil stratigraphy without the need for sample retrieval.

**Vane Shear Test**
Particularly useful for soft clay deposits common in the Terai region, this test measures the undrained shear strength of cohesive soils.

### 3. Laboratory Testing

Samples collected from the field undergo rigorous laboratory analysis:

- **Grain size analysis** - Classifying soil particles
- **Atterberg limits** - Determining plasticity characteristics
- **Consolidation tests** - Predicting settlement behavior
- **Triaxial tests** - Measuring shear strength parameters

## Case Study: Highway Project in Chitwan

Recently, our team conducted geotechnical investigations for a major highway expansion project in Chitwan. The investigation revealed:

- Variable soil conditions with soft clay layers extending up to 8 meters
- High groundwater table requiring dewatering considerations
- Need for ground improvement techniques in specific sections

Based on our recommendations, the project implemented:
- Preloading with surcharge for soft clay zones
- Deep pile foundations for bridge structures
- Proper drainage systems to manage groundwater

## Best Practices for Construction Projects

### Planning Phase
1. Engage geotechnical consultants early in the project
2. Allocate adequate budget for comprehensive investigations
3. Allow sufficient time for laboratory testing

### Execution Phase
1. Monitor ground conditions during construction
2. Verify design assumptions with field observations
3. Document any unexpected conditions encountered

## Conclusion

Geotechnical investigations are not an optional expense—they're an investment in project success and safety. In Nepal's challenging terrain, proper soil analysis can prevent costly failures and ensure structures stand the test of time.

At South Asia Materials Testing, we combine local expertise with international standards to deliver reliable geotechnical solutions. Contact us today to discuss your project requirements.
    `
  },
  {
    id: 2,
    slug: "why-ndt-crucial-building-safety",
    title: "Why NDT is Crucial for Building Safety",
    excerpt: "Learn how Non-Destructive Testing methods help assess structural integrity without causing damage to existing structures.",
    category: "Industry Insights",
    author: "SA Team",
    date: "Dec 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: false,
    tags: ["NDT", "Structural Testing", "Building Safety", "Quality Assurance"],
    content: `
## What is Non-Destructive Testing?

Non-Destructive Testing (NDT) encompasses a wide variety of analysis techniques used to evaluate the properties of materials, components, or systems without causing damage. In the construction industry, NDT plays a vital role in ensuring structural safety and longevity.

### The Importance of NDT in Construction

Buildings and infrastructure in Nepal face numerous challenges:

- **Seismic activity** - Regular earthquakes test structural integrity
- **Environmental factors** - Monsoon seasons, temperature variations
- **Aging infrastructure** - Many structures require periodic assessment
- **Quality control** - Ensuring new construction meets standards

## Common NDT Methods

### 1. Ultrasonic Pulse Velocity (UPV)

This method uses sound waves to assess concrete quality:

- **How it works**: High-frequency sound pulses are transmitted through concrete
- **What it reveals**: Uniformity, cracks, voids, and concrete quality
- **Applications**: New construction QC, structural assessment

### 2. Rebound Hammer Test

A quick and economical method for estimating concrete strength:

- **Procedure**: A spring-loaded hammer strikes the concrete surface
- **Measurement**: Rebound number correlates with compressive strength
- **Limitations**: Surface condition affects readings

### 3. Rebar Detection and Cover Meter

Essential for assessing reinforced concrete structures:

- **Purpose**: Locate reinforcement bars within concrete
- **Information gained**: Bar size, spacing, and concrete cover depth
- **Importance**: Verifies construction quality and corrosion risk

### 4. Ground Penetrating Radar (GPR)

Advanced technique for subsurface investigation:

- **Technology**: Electromagnetic pulses detect subsurface features
- **Applications**: Locating utilities, voids, reinforcement
- **Advantages**: Non-invasive, rapid scanning capability

## When to Use NDT

### Pre-Purchase Inspections
Before buying property, NDT assessments can reveal hidden structural issues.

### Post-Earthquake Evaluation
After seismic events, rapid assessment helps prioritize repairs.

### Periodic Maintenance
Regular inspections extend building lifespan and prevent failures.

### Quality Assurance
During construction, NDT ensures materials meet specifications.

## Case Study: Historic Building Assessment

Our team recently assessed a 50-year-old government building in Kathmandu:

**Findings:**
- Concrete strength varied significantly across floors
- Rebar corrosion detected in exterior columns
- Original construction generally adequate but repairs needed

**Recommendations:**
- Targeted strengthening of affected columns
- Protective coating application
- Regular monitoring program

## Benefits of Regular NDT

1. **Early problem detection** - Address issues before they become critical
2. **Cost savings** - Preventive maintenance vs. major repairs
3. **Safety assurance** - Protect occupants and users
4. **Documentation** - Build maintenance history
5. **Compliance** - Meet regulatory requirements

## Conclusion

NDT is an essential tool for maintaining safe buildings and infrastructure. Whether you're assessing a new construction or evaluating an aging structure, our comprehensive NDT services provide the insights you need for informed decision-making.

Contact South Asia Materials Testing for professional NDT services tailored to your project needs.
    `
  },
  {
    id: 3,
    slug: "complete-guide-concrete-testing-standards",
    title: "Complete Guide to Concrete Testing Standards",
    excerpt: "Everything you need to know about concrete quality testing, from compression tests to durability assessments.",
    category: "Technical Guide",
    author: "SA Team",
    date: "Dec 1, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: false,
    tags: ["Concrete", "Testing Standards", "Quality Control", "Construction Materials"],
    content: `
## Introduction to Concrete Testing

Concrete is the most widely used construction material in Nepal. Ensuring its quality is paramount for structural safety and durability. This guide covers essential concrete testing procedures and standards.

### Why Concrete Testing Matters

Quality concrete ensures:

- **Structural strength** - Buildings can safely bear loads
- **Durability** - Resistance to weathering and chemical attack
- **Longevity** - Extended service life of structures
- **Safety** - Protection for occupants

## Fresh Concrete Tests

### 1. Slump Test

The most common workability test:

**Procedure:**
1. Fill a standard cone mold in three layers
2. Rod each layer 25 times
3. Remove cone and measure slump

**Interpretation:**
- True slump: Concrete settles evenly
- Shear slump: Indicates harsh mix
- Collapse slump: Excessive water content

### 2. Air Content Test

Critical for freeze-thaw durability:

- **Pressure method**: Most accurate for normal weight concrete
- **Volumetric method**: Used for lightweight aggregates
- **Target values**: Typically 4-7% for exposed concrete

### 3. Temperature Measurement

High temperatures accelerate setting:

- **Maximum**: Usually 32°C at placement
- **Hot weather precautions**: Ice in mixing water, cool aggregates
- **Cold weather precautions**: Heated enclosures, insulation blankets

## Hardened Concrete Tests

### 1. Compressive Strength Test

The definitive measure of concrete quality:

**Standard Specimens:**
- Cubes: 150mm (Nepal Standard)
- Cylinders: 150 x 300mm (ASTM)

**Testing Ages:**
- 7 days: Early strength indicator
- 28 days: Specified strength verification
- 56/90 days: For slow-gaining mixes

### 2. Flexural Strength Test

Important for pavements and slabs:

- **Third-point loading**: Standard method
- **Center-point loading**: Alternative approach
- **Typical values**: 10-15% of compressive strength

### 3. Split Tensile Test

Indirect measure of tensile strength:

- **Application**: Easier than direct tension
- **Values**: About 10% of compressive strength
- **Uses**: Crack prediction, shear calculations

## Durability Tests

### 1. Permeability Testing

Water penetration indicates durability:

- **Rapid chloride permeability**: ASTM C1202
- **Water absorption**: Simple indicator test
- **Depth of penetration**: Under pressure

### 2. Carbonation Depth

Affects reinforcement protection:

- **Indicator**: Phenolphthalein solution
- **Significance**: Reduced pH removes passive layer
- **Monitoring**: Regular assessment for aging structures

### 3. Chloride Content

Critical for reinforcement corrosion:

- **Sources**: Marine environments, deicing salts
- **Limits**: Typically 0.2-0.4% by cement weight
- **Testing**: Titration methods

## Quality Control Program

### Sampling Requirements

- **Frequency**: Based on volume and specification
- **Representation**: Composite samples from batch
- **Documentation**: Complete traceability

### Statistical Analysis

- **Mean strength**: Target 1.65σ above specified
- **Standard deviation**: Measure of consistency
- **Control charts**: Trend identification

## Nepal-Specific Considerations

### Local Aggregates

- **River aggregates**: Common but variable quality
- **Crusite**: Often used in Kathmandu Valley
- **Quality testing**: Essential for each source

### Cement Types

- **OPC**: Standard general-purpose cement
- **PPC**: Pozzolanic cement for durability
- **Blended**: Increasingly available options

## Conclusion

Comprehensive concrete testing ensures construction quality and safety. From fresh properties to long-term durability, each test provides valuable information for quality assurance.

Partner with South Asia Materials Testing for reliable concrete testing services that meet national and international standards.
    `
  },
  {
    id: 4,
    slug: "foundation-testing-when-why-necessary",
    title: "Foundation Testing: When and Why It's Necessary",
    excerpt: "Discover the importance of pile load testing and how it ensures the safety and longevity of your construction projects.",
    category: "Case Study",
    author: "SA Team",
    date: "Nov 28, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: false,
    tags: ["Foundation", "Pile Testing", "Load Testing", "Structural Engineering"],
    content: `
## Understanding Foundation Testing

Foundation testing verifies that deep foundations can safely support design loads. In Nepal's variable soil conditions, this testing is essential for major construction projects.

### Types of Deep Foundations

**Bored Piles:**
- Cast-in-place concrete
- Common in Nepal
- Suitable for various soil conditions

**Driven Piles:**
- Precast concrete or steel
- Faster installation
- Limited application in urban areas

**Micropiles:**
- Small diameter, high capacity
- Ideal for restricted access
- Growing popularity in Nepal

## Pile Load Testing Methods

### 1. Static Load Test

The gold standard for pile capacity verification:

**Maintained Load Test:**
- Apply loads in increments
- Hold each increment constant
- Monitor settlement over time

**Quick Load Test:**
- Shorter duration
- More increments
- Suitable for preliminary assessment

**Key Measurements:**
- Pile head settlement
- Residual movement
- Time-settlement relationship

### 2. Dynamic Load Test (High Strain)

Rapid assessment using pile driving analyzer:

**Advantages:**
- Quick results
- Cost-effective for multiple piles
- Evaluate driving stresses

**Limitations:**
- Requires correlation with static tests
- Complex analysis needed
- Equipment availability

### 3. Pile Integrity Testing (Low Strain)

Quality assurance for pile construction:

**Method:**
- Hammer impact on pile head
- Stress wave reflection analysis
- Identify defects and length

**Applications:**
- 100% testing of production piles
- Defect detection
- Length verification

### 4. Crosshole Sonic Logging

For large diameter bored piles:

**Procedure:**
- Install access tubes during construction
- Pass ultrasonic probes through tubes
- Map concrete quality and anomalies

**Benefits:**
- Detailed quality assessment
- Locate defects precisely
- Essential for critical piles

## When is Foundation Testing Required?

### Mandatory Cases
- Buildings over certain height limits
- Critical infrastructure (bridges, hospitals)
- Poor or variable ground conditions
- New pile contractor qualification

### Recommended Cases
- Cost-sensitive projects (optimize design)
- Complex loading conditions
- Limited geotechnical data
- Risk management strategy

## Case Study: Hotel Development in Pokhara

### Project Overview
- 12-story hotel building
- Alluvial soil with high water table
- 24 bored piles, 800mm diameter, 25m deep

### Testing Program
- 2 static load tests (preliminary and working)
- 4 dynamic load tests on production piles
- 100% integrity testing on all piles

### Results
- Static tests confirmed design capacity
- Dynamic tests validated remaining piles
- Integrity tests revealed one pile with minor defect

### Outcome
- Defective pile was remediated
- Project proceeded on schedule
- Foundation performance verified

## Interpreting Test Results

### Load-Settlement Analysis
- Ultimate capacity determination
- Serviceability assessment
- Comparison with predictions

### Acceptance Criteria
- Maximum settlement limits
- Residual movement thresholds
- Factor of safety verification

### Documentation Requirements
- Detailed test reports
- Calibration certificates
- Photographic records

## Cost-Benefit of Foundation Testing

### Upfront Investment
- Testing costs 2-5% of foundation budget
- Planning time required
- Equipment mobilization

### Long-term Benefits
- Avoid catastrophic failures
- Optimize pile design (potential savings)
- Quality assurance documentation
- Liability protection

## Conclusion

Foundation testing is an investment in project success. Whether using static methods for absolute verification or dynamic testing for production efficiency, proper testing ensures your deep foundations will perform as designed.

South Asia Materials Testing provides comprehensive foundation testing services with state-of-the-art equipment and experienced engineers. Contact us to discuss your project requirements.
    `
  },
];

export const categories = [
  "All Posts",
  "Technical Guides",
  "Industry Insights",
  "Case Studies",
  "Testing Standards",
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentId: number, limit: number = 3): BlogPost[] => {
  return blogPosts.filter(post => post.id !== currentId).slice(0, limit);
};
