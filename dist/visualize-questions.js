window.VISUALIZE_QUESTION_BANK = [
  {
    "id": "v01",
    "topic": "Choose visuals",
    "type": "Choose ONE",
    "prompt": "A report must show monthly revenue over the last 24 months and make upward or downward trends easy to see. Which visual is the best starting point?",
    "options": [
      "Line chart",
      "Pie chart",
      "Table",
      "Card"
    ],
    "answer": "A",
    "why": "A line chart places time in sequence and makes movement across periods easy to compare. It is designed for trends rather than a single value or a list of rows.",
    "wrong": "A pie chart is for part-to-whole comparisons with few categories. A table shows detail but hides the trend. A card shows only one value.",
    "remember": "Trend over time → start with a line chart.",
    "source": "visualize"
  },
  {
    "id": "v02",
    "topic": "Configure visuals",
    "type": "Match EACH requirement",
    "prompt": "A KPI visual will compare current revenue with target and show direction over time. Match each field to its KPI field well.",
    "options": [
      "1. Actual Revenue measure",
      "2. Month field",
      "3. Revenue Target measure"
    ],
    "answer": "1 = Indicator; 2 = Trend axis; 3 = Target goals",
    "why": "The Indicator is the actual value, the Trend axis supplies time, and Target goals provides the comparison value.",
    "wrong": "Swapping these roles produces a KPI without the intended actual-versus-target trend context.",
    "remember": "KPI mapping: actual → Indicator, time → Trend axis, goal → Target goals.",
    "source": "visualize"
  },
  {
    "id": "v03",
    "topic": "Choose visuals",
    "type": "Choose ONE",
    "prompt": "You need to compare sales across 18 product categories. Users must be able to rank categories and compare close values accurately. Which visual should you choose?",
    "options": [
      "Clustered bar chart",
      "Pie chart",
      "Gauge",
      "Funnel chart"
    ],
    "answer": "A",
    "why": "Bars share a common baseline, so people can compare values and ranking accurately even with many categories. A horizontal bar chart also leaves room for long category names.",
    "wrong": "Pie slices are hard to compare when there are many categories. A gauge shows one measure. A funnel is for stage progression.",
    "remember": "Many categories or ranking → bar/column chart.",
    "source": "visualize"
  },
  {
    "id": "v04",
    "topic": "Choose visuals",
    "type": "Choose ONE",
    "prompt": "Finance requires a pixel-perfect, printable invoice-style report with repeating headers, page breaks, and many detail rows. Which report type should you use?",
    "options": [
      "Paginated report",
      "Standard interactive Power BI report",
      "Dashboard tile",
      "Q&A visual"
    ],
    "answer": "A",
    "why": "Paginated reports are designed for fixed-layout, printable output with pages, headers, and detailed rows. Interactive Power BI reports optimize exploration instead.",
    "wrong": "A standard report is better for interactive analysis. A dashboard tile is a summary surface. Q&A answers natural-language questions.",
    "remember": "Fixed, printable, detailed layout → paginated report.",
    "source": "visualize"
  },
  {
    "id": "v05",
    "topic": "Conditional formatting",
    "type": "Choose ONE",
    "prompt": "A matrix shows Margin % by Region. The threshold differs by region and is returned by a [Margin Target] measure. Values must display red below their regional target and green otherwise. Which approach best supports the requirement?",
    "options": [
      "Create a color measure that compares [Margin %] with [Margin Target], then use conditional formatting by field value.",
      "Create one fixed numeric rule at 10% for every region.",
      "Convert Margin % to Text and sort it alphabetically.",
      "Use a report page tooltip to change cell colors."
    ],
    "answer": "A",
    "why": "A measure can evaluate the region-specific target in the current context and return a color value for conditional formatting.",
    "wrong": "A fixed rule cannot use different targets by region. Text conversion breaks numeric behavior. Tooltips do not control matrix cell formatting.",
    "remember": "When the threshold is contextual, drive formatting with a measure rather than a fixed rule.",
    "source": "visualize"
  },
  {
    "id": "v06",
    "topic": "Conditional formatting",
    "type": "Choose TWO",
    "prompt": "A table contains Actual Sales and Budget. You need the Actual Sales cell to be green when it meets or exceeds Budget and red when it is below Budget. Which TWO approaches can provide the formatting rule?",
    "options": [
      "Use conditional formatting based on rules that compare the values.",
      "Use conditional formatting based on a measure that returns a color value.",
      "Change Actual Sales to Text.",
      "Create a slicer for Budget.",
      "Turn on drillthrough."
    ],
    "answer": "A and B",
    "why": "Conditional formatting can use rules or a field value, such as a measure that returns a color name or hex code. Both approaches can reflect the comparison without changing the underlying sales value.",
    "wrong": "Changing the data type damages numeric analysis. A slicer filters; it does not set the cell color. Drillthrough is navigation.",
    "remember": "Conditional formatting can be driven by rules or a color-returning measure.",
    "source": "visualize"
  },
  {
    "id": "v07",
    "topic": "Slicing and filtering",
    "type": "Choose ONE",
    "prompt": "A user should choose a fiscal year and have every visual on the current page respond. They should be able to see and change the selection directly on the canvas. What should you add?",
    "options": [
      "A slicer for Fiscal Year",
      "A visual-level filter on each visual",
      "A bookmark",
      "A custom tooltip"
    ],
    "answer": "A",
    "why": "A slicer is an on-canvas filtering control that users can interact with. A page filter could filter the page but does not provide the same visible, interactive control.",
    "wrong": "Visual-level filters must be configured separately and are not an on-canvas picker. Bookmarks save state. Tooltips provide hover detail.",
    "remember": "Visible user-controlled filter → slicer.",
    "source": "visualize"
  },
  {
    "id": "v08",
    "topic": "Slicing and filtering",
    "type": "Choose TWO",
    "prompt": "A report page contains a Region map, a Sales column chart, and a Returns table. Selecting a region on the map must highlight its portion of Sales while leaving Returns unchanged. Which TWO interaction settings should you configure from the map?",
    "options": [
      "Set the interaction with Sales to Highlight.",
      "Set the interaction with Returns to None.",
      "Set the interaction with Sales to None.",
      "Set the interaction with Returns to Filter.",
      "Hide the Returns table in the Selection pane."
    ],
    "answer": "A and B",
    "why": "Edit interactions separately for each target visual: Highlight preserves the Sales total while emphasizing the selected portion, and None prevents the Returns table from responding.",
    "wrong": "The other interaction choices contradict the stated behavior. Hiding a visual is not the same as controlling cross-visual interaction.",
    "remember": "Interactions are directional and configured per source-target visual pair.",
    "source": "visualize"
  },
  {
    "id": "v09",
    "topic": "Filtering scope",
    "type": "Choose ONE",
    "prompt": "You must hide test transactions from only one visual while leaving all other visuals and pages unchanged. Which filter scope should you use?",
    "options": [
      "Visual-level filter",
      "Page-level filter",
      "Report-level filter",
      "Slicer sync setting"
    ],
    "answer": "A",
    "why": "A visual-level filter applies only to the selected visual. Page-level filters affect every visual on that page, and report-level filters affect all pages.",
    "wrong": "Page and report filters have broader impact than requested. Sync settings share slicer selections across pages.",
    "remember": "One visual only → visual-level filter.",
    "source": "visualize"
  },
  {
    "id": "v10",
    "topic": "Themes",
    "type": "Choose ONE",
    "prompt": "A report already contains 25 visuals. Brand colors, fonts, and default visual styles must be applied consistently now and reused in future reports. What should the author import?",
    "options": [
      "A custom report theme JSON file.",
      "A PBIX bookmark file.",
      "A semantic model sensitivity label.",
      "A dashboard data-alert definition."
    ],
    "answer": "A",
    "why": "A custom theme JSON centrally defines colors and supported formatting defaults and can be imported into multiple reports.",
    "wrong": "Bookmarks store report state. Sensitivity labels classify content. Data alerts monitor dashboard values.",
    "remember": "Reusable report-wide visual styling belongs in a theme.",
    "source": "visualize"
  },
  {
    "id": "v11",
    "topic": "Sorting",
    "type": "Choose ONE",
    "prompt": "A column chart uses MonthName and currently sorts alphabetically: April, August, December. The model also has MonthNumber. How should you make the chart sort chronologically?",
    "options": [
      "Set MonthName to Sort by column using MonthNumber.",
      "Change MonthName to a Whole number.",
      "Create a bookmark for each month.",
      "Turn MonthName into a slicer."
    ],
    "answer": "A",
    "why": "Sort by column tells Power BI to display the text label in the order defined by a related sort column. MonthName remains readable while MonthNumber supplies the sequence.",
    "wrong": "Changing names to numbers loses readable labels. Bookmarks and slicers do not define sort order.",
    "remember": "Readable text with a business order → Sort by column.",
    "source": "visualize"
  },
  {
    "id": "v12",
    "topic": "Tooltips",
    "type": "Choose ONE",
    "prompt": "A scatter chart should show Account Owner, Last Contact Date, and a small trend chart when a user hovers over a point. You need more than the default tooltip fields. What should you create?",
    "options": [
      "A report page tooltip",
      "A bookmark",
      "A paginated report",
      "A report-level filter"
    ],
    "answer": "A",
    "why": "A report page tooltip is a specially configured report page that appears on hover and can contain visuals, text, and fields. It adds context without crowding the main canvas.",
    "wrong": "A bookmark changes saved state. A paginated report is for printable layout. A report-level filter changes all pages.",
    "remember": "Rich hover detail → report page tooltip.",
    "source": "visualize"
  },
  {
    "id": "v13",
    "topic": "Bookmarks",
    "type": "Choose TWO",
    "prompt": "A page must switch between a summary chart and a detailed table in the same canvas area. Each view should preserve its intended visibility state, and users will switch by selecting buttons. Which TWO features should you configure?",
    "options": [
      "Use the Selection pane to define which objects are visible in each view.",
      "Use bookmarks to capture the two display states and assign them to buttons.",
      "Use a report-level filter for object visibility.",
      "Use automatic page refresh.",
      "Create a many-to-many relationship."
    ],
    "answer": "A and B",
    "why": "The Selection pane controls object visibility and layering. Bookmarks capture each display state, and buttons provide the user navigation between those states.",
    "wrong": "Filters change data, not object visibility. Page refresh and relationships do not implement a show/hide interface.",
    "remember": "Show/hide storytelling pattern: Selection pane + bookmarks + buttons.",
    "source": "visualize"
  },
  {
    "id": "v14",
    "topic": "Selection pane",
    "type": "Choose ONE",
    "prompt": "You need to hide a decorative image behind a chart and change the layer order so the chart is clickable. Which pane should you use?",
    "options": [
      "Selection pane",
      "Filters pane",
      "Fields pane",
      "Performance Analyzer"
    ],
    "answer": "A",
    "why": "The Selection pane lets you show, hide, rename, group, and reorder report objects. It is the place to manage layout layers.",
    "wrong": "The Filters pane controls filtering. The Fields pane supplies data. Performance Analyzer diagnoses visual performance.",
    "remember": "Visibility, grouping, and layers → Selection pane.",
    "source": "visualize"
  },
  {
    "id": "v15",
    "topic": "Navigation",
    "type": "Choose ONE",
    "prompt": "A report has Overview, Product, and Region pages. You want a visible, automatically maintained set of page links for users. What should you add?",
    "options": [
      "A Page navigator",
      "A measure slicer",
      "A report page tooltip",
      "A decomposition tree"
    ],
    "answer": "A",
    "why": "A Page navigator creates navigation buttons from report pages and is designed to stay aligned with the page structure. It gives users a clear way to move through the report.",
    "wrong": "A measure slicer filters measures. A tooltip appears on hover. A decomposition tree analyzes a measure by dimensions.",
    "remember": "Move between report pages → Page navigator or configured navigation buttons.",
    "source": "visualize"
  },
  {
    "id": "v16",
    "topic": "Drillthrough",
    "type": "Choose TWO",
    "prompt": "Managers drill from a customer row on Summary to Customer Detail. The detail page must be filtered to that customer and must retain the source page’s Fiscal Year filter. Which TWO configurations are required on Customer Detail?",
    "options": [
      "Add Customer to the Drill-through filters well.",
      "Enable Keep all filters.",
      "Add Customer only as a visual-level filter.",
      "Disable all interactions on Summary.",
      "Create a separate bookmark for every customer."
    ],
    "answer": "A and B",
    "why": "The drillthrough field establishes the selected customer context. Keep all filters carries other compatible source-page filters, including Fiscal Year.",
    "wrong": "A visual filter does not enable drillthrough. Disabling interactions and creating per-customer bookmarks do not pass the required context.",
    "remember": "Drillthrough field passes the selected entity; Keep all filters carries the surrounding context.",
    "source": "visualize"
  },
  {
    "id": "v17",
    "topic": "Drillthrough",
    "type": "Choose ONE",
    "prompt": "A user filters the source page to Fiscal Year 2026 and then drills through to a Product Details page. The details page should retain the Fiscal Year filter in addition to the selected product. What should you enable?",
    "options": [
      "Keep all filters on the drillthrough page.",
      "Sync slicers only.",
      "Personalize visuals.",
      "Export summarized data."
    ],
    "answer": "A",
    "why": "Keep all filters passes the current filter context to the drillthrough page, in addition to the drillthrough field. This preserves the user’s analysis context.",
    "wrong": "Sync slicers is for matching slicer state across pages, not the general drillthrough context. Personalization and export are unrelated.",
    "remember": "Preserve source-page filter context during drillthrough → Keep all filters.",
    "source": "visualize"
  },
  {
    "id": "v18",
    "topic": "Sync slicers",
    "type": "Choose ONE",
    "prompt": "A Date slicer must apply the same selection on the Executive Summary and Product Detail pages. It should be visible only on the Executive Summary page. What should you configure?",
    "options": [
      "Sync the slicer to both pages and hide it on Product Detail.",
      "Use a report-level filter and delete the slicer.",
      "Add two independent date slicers.",
      "Use a bookmark to copy the selection."
    ],
    "answer": "A",
    "why": "Sync slicers lets a slicer’s selection apply across selected pages while visibility can be configured independently. Users can filter from the summary page and see the filtered detail page.",
    "wrong": "A report filter is not an on-canvas user control. Independent slicers can drift apart. A bookmark is a saved state, not a live shared filter.",
    "remember": "Same slicer state across pages, different visibility → Sync slicers.",
    "source": "visualize"
  },
  {
    "id": "v19",
    "topic": "Export settings",
    "type": "Choose ONE",
    "prompt": "Consumers may export summarized values shown in visuals, but must not export transaction-level rows from the underlying semantic model. Which report setting best matches the requirement?",
    "options": [
      "Allow summarized-data export and disable underlying-data export.",
      "Disable every form of export, including summarized data.",
      "Hide the detail table with a bookmark.",
      "Grant Build permission to all consumers."
    ],
    "answer": "A",
    "why": "Export settings can permit summarized data while preventing the underlying-data export path.",
    "wrong": "Disabling all export is stricter than required. Hiding a visual is not a security setting. Build permission can enable additional data reuse and is contrary to the restriction.",
    "remember": "Match export policy to the allowed grain; visual hiding is not data security.",
    "source": "visualize"
  },
  {
    "id": "v20",
    "topic": "Mobile design",
    "type": "Choose ONE",
    "prompt": "Field sellers mainly view a report on phones. They need the most important KPI, date slicer, and a short sales trend without horizontal scrolling. What should you do?",
    "options": [
      "Design a mobile layout for the report page.",
      "Increase the desktop page width.",
      "Use only a matrix visual.",
      "Disable all filters."
    ],
    "answer": "A",
    "why": "The mobile layout view lets you arrange and prioritize visuals for a phone-sized canvas. It is built for this use case, rather than relying on a squeezed desktop layout.",
    "wrong": "A wider desktop page worsens the issue. A matrix can be difficult on a small screen. Removing filters may reduce usefulness.",
    "remember": "Phone-first report consumption → design the mobile layout.",
    "source": "visualize"
  },
  {
    "id": "v21",
    "topic": "Accessibility",
    "type": "Choose TWO",
    "prompt": "A report will be used by keyboard-only users and screen-reader users. Decorative shapes should not receive focus, and the reading sequence must follow the visual story. Which TWO actions should you take?",
    "options": [
      "Set meaningful alt text on informative visuals.",
      "Configure a logical tab order and exclude decorative objects where appropriate.",
      "Use color alone to indicate status.",
      "Place every object first in tab order.",
      "Remove all titles to shorten announcements."
    ],
    "answer": "A and B",
    "why": "Alt text gives assistive technology useful meaning, while tab order provides predictable keyboard and reading navigation without unnecessary decorative stops.",
    "wrong": "Color-only meaning is inaccessible. Putting every object first is impossible and unhelpful. Titles often provide important context.",
    "remember": "Accessibility requires both meaningful descriptions and intentional navigation order.",
    "source": "visualize"
  },
  {
    "id": "v22",
    "topic": "Copilot semantic model summary",
    "type": "Choose ONE",
    "prompt": "Before designing a report, an analyst needs a generated overview of an unfamiliar semantic model’s tables, relationships, measures, and important insights. No report page has been created yet. Which capability should the analyst use?",
    "options": [
      "Ask Copilot in the pane to summarize the underlying semantic model.",
      "Create a narrative visual that summarizes the current report page.",
      "Run Analyze: Explain the increase on a chart.",
      "Enable Personalize visuals."
    ],
    "answer": "A",
    "why": "Copilot can summarize the underlying semantic model directly, helping an author understand the model before or while building report content.",
    "wrong": "A narrative visual summarizes report content already placed on pages. Analyze requires a visual data point. Personalization lets consumers alter visuals.",
    "remember": "Model understanding → summarize the semantic model; on-canvas prose → narrative visual.",
    "source": "visualize"
  },
  {
    "id": "v23",
    "topic": "Personalization",
    "type": "Choose ONE",
    "prompt": "Business users want to temporarily change a chart type and swap fields for their own analysis without changing the author’s report for everyone. Which feature should you enable?",
    "options": [
      "Personalize visuals",
      "Automatic page refresh",
      "Visual calculations",
      "Drillthrough"
    ],
    "answer": "A",
    "why": "Personalize visuals allows users to make their own view of a visual, such as changing fields or chart type, while preserving the author’s original report.",
    "wrong": "Automatic refresh updates data. Visual calculations create calculations. Drillthrough navigates to detail.",
    "remember": "Let consumers explore a visual safely → personalize visuals.",
    "source": "visualize"
  },
  {
    "id": "v24",
    "topic": "Automatic page refresh",
    "type": "Choose TWO",
    "prompt": "An operations page must refresh visible values every 30 seconds while it remains open. The source and capacity support the interval, and the model should not import periodic snapshots. Which TWO configurations are required?",
    "options": [
      "Use DirectQuery for the relevant table.",
      "Configure automatic page refresh with a 30-second interval.",
      "Create a bookmark that reloads the page.",
      "Use an Import table with no scheduled refresh.",
      "Configure an email subscription every 30 seconds."
    ],
    "answer": "A and B",
    "why": "Automatic page refresh operates for DirectQuery scenarios and refreshes the open report page at the configured interval, subject to capacity and source limits.",
    "wrong": "Bookmarks do not query for fresh data. An unrefreshed Import table stays stale. Subscriptions are scheduled deliveries, not second-level page refresh.",
    "remember": "Live operational page: DirectQuery plus automatic page refresh, within supported limits.",
    "source": "visualize"
  },
  {
    "id": "v25",
    "topic": "Visual calculations",
    "type": "Choose ONE",
    "prompt": "A matrix has Year, Quarter, and Month on rows and [Sales] as a value. You need a running total that follows the matrix layout and restarts for each Year, without creating a reusable model measure. Which visual calculation is the best fit?",
    "options": [
      "RUNNINGSUM([Sales], HIGHESTPARENT)",
      "SUM(FactSales[Sales]) as a calculated column",
      "SAMEPERIODLASTYEAR([Sales])",
      "A report page tooltip using [Sales]"
    ],
    "answer": "A",
    "why": "A visual calculation works on the matrix result. RUNNINGSUM follows the visual axis, and HIGHESTPARENT resets the calculation at the Year level in this hierarchy.",
    "wrong": "A calculated column cannot follow a visual layout. SAMEPERIODLASTYEAR compares periods instead of accumulating them. A tooltip does not calculate the displayed running total.",
    "remember": "Visual-only layout-aware accumulation → visual calculation; use Reset to control partitions.",
    "source": "visualize"
  },
  {
    "id": "v26",
    "topic": "Analyze feature",
    "type": "Choose ONE",
    "prompt": "A column chart shows an unexpected increase in revenue in June. You want Power BI to help identify possible explanations by comparing relevant data dimensions. Which feature should you use?",
    "options": [
      "Analyze: Explain the increase",
      "Edit interactions",
      "Selection pane",
      "Sync slicers"
    ],
    "answer": "A",
    "why": "The Analyze feature can investigate changes in a data point and suggest possible explanations using fields in the model. It is intended for exploratory analysis of an increase or decrease.",
    "wrong": "Interactions, selection layers, and sync slicers control report behavior; they do not explain a change in a data point.",
    "remember": "Why did this value rise or fall? → Analyze.",
    "source": "visualize"
  },
  {
    "id": "v27",
    "topic": "Grouping and binning",
    "type": "Choose ONE",
    "prompt": "You have a numeric Age column with thousands of distinct values. You need bands such as 0–9, 10–19, and 20–29 for a chart. What should you create?",
    "options": [
      "Bins for the Age column",
      "A report page tooltip",
      "A bookmark",
      "A relationship to a date table"
    ],
    "answer": "A",
    "why": "Binning groups a numeric or date/time field into ranges, reducing many distinct values into analyzable intervals. It is appropriate for an age distribution.",
    "wrong": "Tooltips and bookmarks do not create categories. A date relationship is unrelated to age ranges.",
    "remember": "Numeric ranges for analysis → bins.",
    "source": "visualize"
  },
  {
    "id": "v28",
    "topic": "Clustering",
    "type": "Choose ONE",
    "prompt": "A scatter chart plots customers by Revenue and Profit Margin. You want Power BI to identify natural groups of similar customers without manually defining the groups. What should you use?",
    "options": [
      "Clustering",
      "A page navigator",
      "Conditional formatting",
      "A drillthrough filter"
    ],
    "answer": "A",
    "why": "Clustering groups data points with similar characteristics, which is especially useful in a scatter chart. It can reveal segments that are not obvious from individual points.",
    "wrong": "Navigation and drillthrough move around a report. Conditional formatting changes appearance but does not discover groups.",
    "remember": "Find natural groups of similar points → clustering.",
    "source": "visualize"
  },
  {
    "id": "v29",
    "topic": "AI visuals",
    "type": "Choose ONE",
    "prompt": "You need to identify which customer attributes most influence whether a customer has a high likelihood of churn. Which AI visual is the best fit?",
    "options": [
      "Key influencers",
      "Gauge",
      "Waterfall chart",
      "Table"
    ],
    "answer": "A",
    "why": "The Key influencers visual analyzes factors that affect a selected outcome and can show key influencers and top segments. It matches an influence-on-churn question.",
    "wrong": "A gauge shows progress to a target. A waterfall explains additive changes. A table lists values but does not identify influences.",
    "remember": "What factors influence an outcome? → Key influencers.",
    "source": "visualize"
  },
  {
    "id": "v30",
    "topic": "AI visuals",
    "type": "Choose ONE",
    "prompt": "An executive starts with Total Sales and wants to interactively break it down by Region, Channel, Product Category, and then select an AI-suggested next split. Which visual should you use?",
    "options": [
      "Decomposition tree",
      "Donut chart",
      "Card",
      "Slicer"
    ],
    "answer": "A",
    "why": "The Decomposition tree lets users break down a measure across dimensions and can use AI splits to suggest the next dimension. It supports guided root-cause exploration.",
    "wrong": "Donuts and cards summarize values. A slicer filters but does not show a decomposition path.",
    "remember": "Interactive measure breakdown with AI splits → Decomposition tree.",
    "source": "visualize"
  },
  {
    "id": "v31",
    "topic": "Anomalies",
    "type": "Choose ONE",
    "prompt": "A daily order-volume line chart has an unusual spike. You want Power BI to flag the point and offer explanations for why it differs from expected behavior. What should you enable?",
    "options": [
      "Find anomalies on the line chart",
      "A fixed report-level filter",
      "A page navigator",
      "A custom theme"
    ],
    "answer": "A",
    "why": "Anomaly detection on a line chart can highlight unexpected points and provide explanations. It is for detecting unusual values in a time series.",
    "wrong": "Filters, navigation, and themes do not identify exceptional time-series points.",
    "remember": "Unexpected spike or dip in a line chart → anomaly detection.",
    "source": "visualize"
  },
  {
    "id": "v32",
    "topic": "Forecasting",
    "type": "Choose TWO",
    "prompt": "You need Power BI to forecast monthly sales and display a confidence interval. Which TWO report conditions or actions support the forecast?",
    "options": [
      "Use a line chart with a continuous time axis and sufficient history.",
      "Add Forecast from the Analytics pane.",
      "Use a categorical legend with multiple independent series in the same forecast.",
      "Replace the date with MonthName text only.",
      "Use a card visual."
    ],
    "answer": "A and B",
    "why": "Forecasting is added from the Analytics pane to a supported line chart with an appropriate continuous time axis and enough historical observations.",
    "wrong": "MonthName text alone loses chronological continuity. A card has no time series. Unsupported multi-series configurations can prevent forecasting.",
    "remember": "Forecast needs a supported time-series visual, a continuous axis, history, and the Analytics-pane forecast.",
    "source": "visualize"
  },
  {
    "id": "v33",
    "topic": "Reference lines",
    "type": "Choose ONE",
    "prompt": "A line chart shows actual daily revenue. Leadership wants a horizontal line at the monthly target so actual performance can be compared visually to it. What should you add?",
    "options": [
      "A constant line in the Analytics pane",
      "A report page tooltip",
      "A slicer",
      "A bookmark"
    ],
    "answer": "A",
    "why": "A constant line is a reference line at a specified value. It provides a stable benchmark directly on the chart.",
    "wrong": "Tooltips, slicers, and bookmarks do not add a fixed visual benchmark line.",
    "remember": "Fixed benchmark on a chart → constant line.",
    "source": "visualize"
  },
  {
    "id": "v34",
    "topic": "Error bars",
    "type": "Choose ONE",
    "prompt": "A chart shows average delivery time by warehouse. You need to show uncertainty or variation around each average. Which feature should you use?",
    "options": [
      "Error bars",
      "Conditional formatting",
      "A page navigator",
      "A drillthrough button"
    ],
    "answer": "A",
    "why": "Error bars show a range or uncertainty around plotted values, helping viewers distinguish a precise point estimate from its variability.",
    "wrong": "Conditional formatting changes visual emphasis but does not show statistical variation. Navigation and drillthrough are unrelated.",
    "remember": "Show variation or uncertainty around a value → error bars.",
    "source": "visualize"
  },
  {
    "id": "v35",
    "topic": "Case study: Alpine Outfitters",
    "type": "Choose TWO",
    "caseStudy": {
      "title": "Case study: Alpine Outfitters",
      "intro": "Alpine Outfitters has an Executive Summary page and a Store Detail page. Both pages use a Date table. Executives choose a fiscal quarter on the Summary page, then open Store Detail. They need the same quarter to apply there, but the Date slicer must remain visible only on Summary. They also need to right-click a store and open Store Detail filtered to that store."
    },
    "prompt": "Which TWO configurations meet the requirements?",
    "options": [
      "Sync the Date slicer to both pages and hide it on Store Detail.",
      "Add Store to the Drill-through filters well on Store Detail.",
      "Use a report-level Date filter and remove the slicer.",
      "Create a bookmark for every store.",
      "Set the Summary chart interaction with Store Detail to None."
    ],
    "answer": "A and B",
    "why": "Sync slicers shares the fiscal-quarter selection while allowing independent visibility. A Store field in the Drill-through well enables the right-click detail navigation for the selected store.",
    "wrong": "A report filter removes the visible quarter control. Bookmarks for every store are difficult to maintain and do not provide dynamic drillthrough. Interaction settings do not configure drillthrough.",
    "remember": "Across pages: sync slicers. Contextual detail page: drillthrough field.",
    "source": "visualize"
  },
  {
    "id": "v36",
    "topic": "Case study: Alpine Outfitters",
    "type": "Choose ONE",
    "caseStudy": {
      "title": "Case study: Alpine Outfitters",
      "intro": "Alpine Outfitters has an Executive Summary page and a Store Detail page. Both pages use a Date table. Executives choose a fiscal quarter on the Summary page, then open Store Detail. They need the same quarter to apply there, but the Date slicer must remain visible only on Summary. They also need to right-click a store and open Store Detail filtered to that store."
    },
    "prompt": "After a manager filters Summary to Q2 and drills through a selected store, Store Detail must also retain the Q2 context. What should you configure on the drillthrough page?",
    "options": [
      "Keep all filters",
      "Personalize visuals",
      "Export underlying data",
      "A report page tooltip"
    ],
    "answer": "A",
    "why": "Keep all filters carries existing filter context, such as Q2, to the drillthrough target in addition to the selected store. This keeps detail consistent with the manager’s current analysis.",
    "wrong": "Personalization, export, and tooltips do not pass general filter context through drillthrough.",
    "remember": "Drillthrough should retain other current filters → Keep all filters.",
    "source": "visualize"
  },
  {
    "id": "v37",
    "topic": "Copilot narratives",
    "type": "Choose ONE",
    "prompt": "A report author wants a written summary saved on the report canvas. It must summarize selected visuals, update with the report’s filter context, and be reviewed before publication. Which capability is designed for this?",
    "options": [
      "A narrative visual with Copilot.",
      "Copilot summarize semantic model in the pane.",
      "A page navigator.",
      "Analyze: Explain the increase."
    ],
    "answer": "A",
    "why": "The Copilot narrative visual creates on-canvas prose from selected report content and can reflect the report context. The author should review generated text for accuracy.",
    "wrong": "A semantic-model summary helps understand the model but is not the requested on-canvas visual. Navigation and Analyze serve different tasks.",
    "remember": "Saved narrative on the canvas → narrative visual with Copilot.",
    "source": "visualize"
  },
  {
    "id": "v38",
    "topic": "Copilot report creation",
    "type": "Choose ONE",
    "prompt": "An author has a certified semantic model but is unsure which report pages would be most useful. The author wants Copilot to propose an outline of page topics before deciding which pages to generate. What should the author request?",
    "options": [
      "Ask Copilot to suggest content for a new report.",
      "Ask Copilot to create a specific report page immediately.",
      "Create a paginated report.",
      "Enable automatic page refresh."
    ],
    "answer": "A",
    "why": "Suggest content evaluates the model and proposes a report outline with useful page topics. The author can then select which suggested pages to create.",
    "wrong": "Creating a page immediately skips the requested outline stage. Paginated reports and page refresh do not recommend report content.",
    "remember": "Need ideas and an outline first → suggest content; know the page you want → create a page.",
    "source": "visualize"
  },
  {
    "id": "v39",
    "topic": "Case study: Fabrikam Service",
    "type": "Choose TWO",
    "caseStudy": {
      "title": "Case study: Fabrikam Service",
      "intro": "Fabrikam Service tracks daily ticket volume by support team. Leaders need a time-series page that highlights unexpected volume changes, lets users investigate why a selected day changed, and stays accessible to color-blind users. The page already has a line chart of Ticket Count by Date."
    },
    "prompt": "Which TWO actions best meet the requirements?",
    "options": [
      "Enable anomaly detection on the line chart.",
      "Use Analyze to explain an increase or decrease for a selected point.",
      "Use red and green as the only meaning for ticket status.",
      "Replace the line chart with a donut chart.",
      "Turn the Date field into a text field."
    ],
    "answer": "A and B",
    "why": "Anomaly detection flags unexpected time-series points, while Analyze can help investigate an increase or decrease. Accessibility also requires signals beyond color alone.",
    "wrong": "Color alone is inaccessible. A donut chart is poor for a daily trend. Converting Date to Text damages time analysis.",
    "remember": "Time-series surprise: anomaly detection. Why did it change: Analyze.",
    "source": "visualize"
  },
  {
    "id": "v40",
    "topic": "Case study: Fabrikam Service",
    "type": "Choose ONE",
    "caseStudy": {
      "title": "Case study: Fabrikam Service",
      "intro": "Fabrikam Service tracks daily ticket volume by support team. Leaders need a time-series page that highlights unexpected volume changes, lets users investigate why a selected day changed, and stays accessible to color-blind users. The page already has a line chart of Ticket Count by Date."
    },
    "prompt": "Which change most directly improves accessibility for a chart that uses colors to distinguish support-team status?",
    "options": [
      "Add labels or icons and use a color-safe palette.",
      "Remove all labels to make the chart cleaner.",
      "Use only red and green.",
      "Hide the chart from keyboard navigation."
    ],
    "answer": "A",
    "why": "Labels or icons provide a second signal, and a color-safe palette helps more people distinguish statuses. The chart remains informative even when color perception differs.",
    "wrong": "Removing labels, relying on red/green alone, or removing keyboard access reduces accessibility.",
    "remember": "Color is helpful, but it must not be the only cue.",
    "source": "visualize"
  }
];
