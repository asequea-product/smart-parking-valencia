# Smart Parking Valencia

Prototype that helps drivers decide where they are more likely to find parking in Valencia using open urban data and simple prediction signals.

This project was built as a Product Manager portfolio experiment exploring the limitations of public parking data and how decision-support tools can improve the parking experience even without real-time sensors.

Problem

Drivers in Valencia often spend several minutes searching for parking.

The ideal solution would be real-time detection of free street spaces. However, this data is not publicly available.

The city operates 4,000+ street sensors through the VLCi platform, but the data is restricted to municipal systems and not exposed through public APIs.

This creates a real product challenge:

The data exists, but access is fragmented or restricted.

Product Approach

Instead of detecting individual free spaces, this prototype helps drivers make better parking decisions using probabilistic signals.

The app estimates the likelihood of finding parking in a specific area based on:

zone type

time of day

day of week

parking alternatives nearby

This mirrors how real mobility products work when full sensor data is unavailable.

Data Sources
Public street data

Available without permissions:

Valencia ORA zones (blue / orange street parking)

zone locations

tariffs

parking schedules

historical parking behaviour patterns

current device time

day of the week

These signals are used to estimate parking probability.

Municipal underground parkings

The prototype integrates:

22 municipal underground parkings in Valencia

Available information:

location

total capacity

type

estimated availability patterns

These provide a fallback when street parking probability is low.

Optional integrations

Future versions could integrate parking providers such as:

Parclick

ElParking

Both provide developer APIs with registration.

These would allow real-time availability of private parking garages.

Key Features

Interactive map of Valencia showing:

ORA blue zones

ORA orange zones

municipal parkings

Search for:

street

neighbourhood

destination

Probability estimation:

Example

Carrer de Russafa
Estimated availability: ~35%
Best time window: 14:00–16:00

Decision support:

The app suggests whether to:

try street parking

move to another nearby street

go directly to a parking garage

Crowdsourced feedback

Users can improve predictions through simple signals:

✓ I parked here
↑ I left a free spot

These signals simulate a Waze-like feedback loop for parking prediction.

Product Insight

The experiment reveals an important constraint in urban mobility products:

The biggest limitation is not the algorithm, but access to city infrastructure data.

While Valencia has thousands of parking sensors, the lack of open APIs prevents real-time street parking visibility.

Products must therefore rely on probabilistic models and behavioural patterns.

Tech Stack

Frontend

JavaScript

HTML

OpenStreetMap

Backend

Netlify serverless functions

Data

Valencia Open Data

ORA zone datasets

municipal parking datasets

Deployment

Netlify
