window.MODEL_QUESTION_BANK = [
  {
    "id": "m01",
    "topic": "Table and column properties",
    "type": "Choose TWO",
    "prompt": "FactSales contains an internal OrderKey used in relationships and a numeric-looking InvoiceNumber used only as a label. Report authors should not drag OrderKey into visuals, and InvoiceNumber must not default to Sum. Which TWO model properties should you configure?",
    "options": [
      "Hide OrderKey in report view.",
      "Set InvoiceNumber default summarization to Don’t summarize.",
      "Delete OrderKey from the model.",
      "Hide InvoiceNumber and set Quantity to Don’t summarize.",
      "Create a bidirectional relationship for InvoiceNumber."
    ],
    "answer": "A and B",
    "why": "A relationship key can remain in the model while hidden from report authors. A numeric identifier should use Don’t summarize so visuals do not offer a meaningless sum by default.",
    "wrong": "Deleting the key can break relationships. Hiding the business identifier removes a useful label. Cross-filter direction does not control summarization.",
    "remember": "Configure columns for their analytical role: hide technical keys and do not summarize identifiers.",
    "source": "model"
  },
  {
    "id": "m02",
    "topic": "Table and column properties",
    "type": "Choose ONE",
    "prompt": "A Sales Amount measure should display as currency with two decimal places throughout the report. Where should you configure this?",
    "options": [
      "The measure format property in the model.",
      "A slicer.",
      "The relationship cardinality.",
      "The query privacy level."
    ],
    "answer": "A",
    "why": "Formatting a measure in the model applies the intended display consistently wherever the measure is used.",
    "wrong": "A slicer filters data. Cardinality and privacy levels do not control number display.",
    "remember": "Use model formatting for reusable, consistent measure display.",
    "source": "model"
  },
  {
    "id": "m03",
    "topic": "Table and column properties",
    "type": "Choose TWO",
    "prompt": "DimDate contains Year, Quarter, MonthName, MonthNumber, and Date. Users must drill Year → Quarter → MonthName, and months must appear chronologically rather than alphabetically. Which TWO configurations are required?",
    "options": [
      "Create a Year–Quarter–MonthName hierarchy.",
      "Set MonthNumber to sort by MonthName.",
      "Create a many-to-many relationship to FactSales.",
      "Set MonthName to sort by MonthNumber.",
      "Convert MonthName to a measure."
    ],
    "answer": "A and D",
    "why": "The hierarchy defines the drill path. Sort by column uses MonthNumber to order the MonthName labels chronologically.",
    "wrong": "Reversing the sort mapping does not order MonthName. Relationship cardinality is unrelated, and a text attribute should not become a measure.",
    "remember": "Hierarchy controls drill; Sort by column controls label order.",
    "source": "model"
  },
  {
    "id": "m04",
    "topic": "Role-playing dimensions",
    "type": "Choose ONE",
    "prompt": "FactSales has both OrderDate and ShipDate. A report must slice sales by either date role at the same time. What is the clearest model design?",
    "options": [
      "Create separate role-playing Date tables named Order Date and Ship Date.",
      "Use one Date table with two active relationships to FactSales.",
      "Create a many-to-many relationship between dates and sales.",
      "Store both dates as text in FactSales."
    ],
    "answer": "A",
    "why": "Separate role-playing Date tables allow both date roles to be active and independently usable in the same report.",
    "wrong": "Only one active relationship can exist between the same two tables. Many-to-many and text dates do not solve the role requirement.",
    "remember": "Need two date roles simultaneously → separate role-playing date dimensions.",
    "source": "model"
  },
  {
    "id": "m05",
    "topic": "Role-playing dimensions",
    "type": "Choose ONE",
    "prompt": "FactSales has an active relationship from OrderDateKey to DimDate and an inactive relationship from ShipDateKey to DimDate. Which measure returns sales by the Ship Date context while leaving Order Date as the model default?",
    "options": [
      "Ship Date Sales = CALCULATE([Total Sales], USERELATIONSHIP(FactSales[ShipDateKey], DimDate[DateKey]))",
      "Ship Date Sales = SUM(FactSales[ShipDateKey])",
      "Ship Date Sales = CALCULATE([Total Sales], CROSSFILTER(FactSales[OrderDateKey], DimDate[DateKey], BOTH))",
      "Ship Date Sales = RELATED(DimDate[Date])"
    ],
    "answer": "A",
    "why": "USERELATIONSHIP activates the existing inactive Ship Date relationship only for the measure evaluation inside CALCULATE.",
    "wrong": "Summing a key is meaningless. CROSSFILTER changes direction on the Order Date relationship rather than activating Ship Date. RELATED returns a row-context value, not the required aggregation.",
    "remember": "Alternate date role in one measure: CALCULATE plus USERELATIONSHIP.",
    "source": "model"
  },
  {
    "id": "m06",
    "topic": "Relationships",
    "type": "Choose TWO",
    "prompt": "DimCustomer contains one row per CustomerKey. FactSales contains many rows per CustomerKey. Customer slicers must filter sales, but selecting a sales row must not filter the customer dimension. Which TWO relationship settings are appropriate?",
    "options": [
      "Many-to-one (*:1) from FactSales to DimCustomer.",
      "Single-direction filtering from DimCustomer to FactSales.",
      "Many-to-many cardinality.",
      "Both-direction filtering.",
      "One-to-one cardinality."
    ],
    "answer": "A and B",
    "why": "The unique dimension is the one side and the repeating fact is the many side. Single direction from dimension to fact supports normal star-schema filtering without unnecessary reverse propagation.",
    "wrong": "Many-to-many and one-to-one contradict the stated key uniqueness. Both direction adds behavior the requirement explicitly does not need.",
    "remember": "Star schema default: dimension 1 → fact many, with a single filter direction.",
    "source": "model"
  },
  {
    "id": "m07",
    "topic": "Relationships",
    "type": "Choose ONE",
    "prompt": "A relationship cannot be set to one-to-many because the supposed lookup column contains duplicate values. What should you do first?",
    "options": [
      "Fix or redesign the lookup table so its key is unique.",
      "Change the relationship to both-direction filtering.",
      "Hide the duplicate rows in a report.",
      "Change all keys to decimal numbers."
    ],
    "answer": "A",
    "why": "The one side of a one-to-many relationship must contain unique values. Resolve duplicates or create an appropriate dimension before modeling.",
    "wrong": "Filter direction does not make a key unique. Hiding report rows and changing numeric type do not repair model integrity.",
    "remember": "A reliable dimension starts with a unique key.",
    "source": "model"
  },
  {
    "id": "m08",
    "topic": "Relationships",
    "type": "Choose ONE",
    "prompt": "In a normal star schema, a Product slicer should filter FactSales. Which cross-filter direction should you use by default?",
    "options": [
      "Single direction from DimProduct to FactSales.",
      "Single direction from FactSales to DimProduct.",
      "Both directions on every relationship.",
      "No relationship."
    ],
    "answer": "A",
    "why": "A star schema normally filters from dimensions to facts in one direction. It is predictable and usually performs well.",
    "wrong": "Fact-to-dimension filtering is the reverse of the normal path. Both directions everywhere can create ambiguity and extra work.",
    "remember": "Default star schema path: dimension → fact, single direction.",
    "source": "model"
  },
  {
    "id": "m09",
    "topic": "Relationships",
    "type": "Choose TWO",
    "prompt": "Why should bidirectional cross-filtering be used only when needed?",
    "options": [
      "It can create ambiguous filter paths.",
      "It can negatively affect performance.",
      "It automatically makes duplicate keys unique.",
      "It replaces the need for measures.",
      "It converts Import tables to DirectQuery."
    ],
    "answer": "A and B",
    "why": "Both-direction filtering can introduce multiple paths for filters and can add performance cost. Use it for a defined requirement, not as a default.",
    "wrong": "It does not repair keys, replace DAX, or change a table storage mode.",
    "remember": "Bidirectional filters are powerful but can be ambiguous and slow.",
    "source": "model"
  },
  {
    "id": "m10",
    "topic": "Relationships",
    "type": "Choose ONE",
    "prompt": "A bridge table contains one row per Student-Course enrollment. Students and Courses each have unique keys. How should the bridge relate to the two dimensions?",
    "options": [
      "Create one-to-many relationships from each dimension to the bridge.",
      "Create a direct many-to-many relationship between Students and Courses only.",
      "Create one-to-one relationships from the bridge to both dimensions.",
      "Remove the bridge and append all tables."
    ],
    "answer": "A",
    "why": "A bridge table models the enrollment fact at the intersection of Student and Course. Each dimension filters the bridge through a one-to-many relationship.",
    "wrong": "A direct many-to-many can hide the bridge grain. One-to-one is false because each student and course can have many enrollments.",
    "remember": "Model the real intersection as a bridge/fact table.",
    "source": "model"
  },
  {
    "id": "m11",
    "topic": "Common date table",
    "type": "Choose TWO",
    "prompt": "Sales and Inventory are separate fact tables. Both require Year, Quarter, Month, YTD, and prior-year analysis using the same calendar. Which TWO design choices best support the requirement?",
    "options": [
      "Create one conformed Date dimension with a unique continuous Date column.",
      "Relate the Date dimension one-to-many to each fact at the supported date grain.",
      "Create a direct many-to-many relationship between Sales and Inventory.",
      "Store only MonthName text in each fact and remove dates.",
      "Use a disconnected date table on each report page."
    ],
    "answer": "A and B",
    "why": "A shared, continuous Date dimension gives both facts consistent calendar attributes and time-intelligence behavior. Each fact relates independently to the date dimension.",
    "wrong": "Fact-to-fact relationships introduce ambiguity. Month labels alone cannot identify years or dates. Disconnected page tables do not provide shared model filtering.",
    "remember": "Multiple facts should share conformed dimensions rather than relate directly to one another.",
    "source": "model"
  },
  {
    "id": "m12",
    "topic": "Common date table",
    "type": "Choose ONE",
    "prompt": "Your Date table has one row per day from 2023-01-01 through 2026-12-31. Its Date column contains no blanks or duplicates. Why mark it as a date table?",
    "options": [
      "To identify the column Power BI should use as the model date table for time intelligence.",
      "To change all fact tables to Import mode.",
      "To make every relationship bidirectional.",
      "To create an automatic bookmark."
    ],
    "answer": "A",
    "why": "Marking identifies the designated date column for the model’s date-table behavior and time intelligence expectations.",
    "wrong": "It does not change storage mode, cross-filter direction, or navigation.",
    "remember": "Mark the intentional calendar table rather than relying on accidental date behavior.",
    "source": "model"
  },
  {
    "id": "m13",
    "topic": "Calculated columns",
    "type": "Choose ONE",
    "prompt": "Each sales row needs Margin = SalesAmount - CostAmount, and the value will be used to group and filter individual rows. What should you create?",
    "options": [
      "A calculated column in FactSales.",
      "A measure only.",
      "A report tooltip.",
      "A calculation group."
    ],
    "answer": "A",
    "why": "A calculated column is evaluated row by row during model refresh and becomes a stored field that can be used to group or filter rows.",
    "wrong": "A measure is evaluated in query context and does not create a row-level field. Tooltips and calculation groups are not row fields.",
    "remember": "Row-level stored attribute needed for grouping/filtering → calculated column.",
    "source": "model"
  },
  {
    "id": "m14",
    "topic": "Measures and calculated columns",
    "type": "Choose ONE",
    "prompt": "FactSales stores Quantity, UnitPrice, and UnitCost. You need Total Margin to respond to all report filters without storing a Margin column for every row. Which measure should you create?",
    "options": [
      "Total Margin = SUMX(FactSales, FactSales[Quantity] * (FactSales[UnitPrice] - FactSales[UnitCost]))",
      "Total Margin = FactSales[Quantity] * (FactSales[UnitPrice] - FactSales[UnitCost])",
      "Total Margin = SUM(FactSales[Quantity]) * SUM(FactSales[UnitPrice] - FactSales[UnitCost])",
      "Total Margin = CALENDAR(MIN(FactSales[OrderDate]), MAX(FactSales[OrderDate]))"
    ],
    "answer": "A",
    "why": "SUMX evaluates the row-level margin expression for each visible fact row and then sums the results in the current filter context.",
    "wrong": "A measure cannot reference multiple raw row values without an iterator or aggregation. Multiplying separate totals produces a different result. CALENDAR returns a table.",
    "remember": "When the arithmetic must occur per row before aggregation, use an X iterator such as SUMX.",
    "source": "model"
  },
  {
    "id": "m15",
    "topic": "Calculated tables",
    "type": "Choose ONE",
    "prompt": "You need a table containing every date from the earliest to latest transaction date, with Year, Month, and Quarter attributes. The table should refresh when the model refreshes. What should you create?",
    "options": [
      "A calculated Date table using DAX.",
      "A card visual.",
      "A report-level filter.",
      "A quick measure."
    ],
    "answer": "A",
    "why": "A calculated table can generate a reusable calendar structure as part of the model during refresh.",
    "wrong": "Visuals and filters do not create model tables. A quick measure creates a measure, not a table.",
    "remember": "DAX can create model tables when the structure belongs in the semantic model.",
    "source": "model"
  },
  {
    "id": "m16",
    "topic": "Single aggregation measures",
    "type": "Choose ONE",
    "prompt": "You have measures [Total Sales] and [Total Cost]. Gross Margin % must return blank rather than an error when sales is zero and must respond to report filters. Which measure is best?",
    "options": [
      "Gross Margin % = DIVIDE([Total Sales] - [Total Cost], [Total Sales])",
      "Gross Margin % = ([Total Sales] - [Total Cost]) / FactSales[SalesAmount]",
      "Gross Margin % = SUM(FactSales[SalesAmount])",
      "Gross Margin % = FORMAT([Total Sales], \"0.0%\")"
    ],
    "answer": "A",
    "why": "DIVIDE safely handles a zero or blank denominator and returns a numeric ratio that can be formatted as a percentage.",
    "wrong": "A measure cannot use an unaggregated fact column as the denominator. SUM is not a ratio. FORMAT returns text, which harms numeric analysis.",
    "remember": "For ratios, use measures and DIVIDE; apply display formatting separately.",
    "source": "model"
  },
  {
    "id": "m17",
    "topic": "Basic statistical functions",
    "type": "Choose ONE",
    "prompt": "You need the number of distinct customers with at least one Completed order in the current Date, Product, and Region context. Which measure is correct?",
    "options": [
      "Completed Customers = CALCULATE(DISTINCTCOUNT(FactSales[CustomerKey]), FactSales[Status] = \"Completed\")",
      "Completed Customers = COUNT(FactSales[CustomerKey])",
      "Completed Customers = DISTINCTCOUNT(DimCustomer[CustomerKey]) + COUNT(FactSales[Status])",
      "Completed Customers = SUM(FactSales[CustomerKey])"
    ],
    "answer": "A",
    "why": "DISTINCTCOUNT counts customers, while CALCULATE adds the Completed-status filter and retains unrelated filters such as Date, Product, and Region.",
    "wrong": "COUNT counts order rows rather than customers. Adding unrelated counts is invalid logic. Customer keys should not be summed.",
    "remember": "Conditional unique count: CALCULATE around DISTINCTCOUNT.",
    "source": "model"
  },
  {
    "id": "m18",
    "topic": "CALCULATE",
    "type": "Choose ONE",
    "prompt": "A measure must return Bikes sales while ignoring every filter from the Product table, including Brand and Color, but it must retain Date and Region filters. Which expression meets the requirement?",
    "options": [
      "CALCULATE([Total Sales], REMOVEFILTERS(Product), Product[Category] = \"Bikes\")",
      "CALCULATE([Total Sales], REMOVEFILTERS(DimDate), Product[Category] = \"Bikes\")",
      "CALCULATE([Total Sales], ALL(FactSales))",
      "FILTER(Product, Product[Category] = \"Bikes\")"
    ],
    "answer": "A",
    "why": "REMOVEFILTERS(Product) clears all product selections, after which the Bikes filter is applied. Filters from other dimensions remain in context.",
    "wrong": "Removing date filters violates the requirement. Clearing the fact table can also remove intended filtering behavior. FILTER alone returns a table, not the requested scalar measure.",
    "remember": "Be precise about which table’s filters to remove; CALCULATE then applies the intended replacement.",
    "source": "model"
  },
  {
    "id": "m19",
    "topic": "CALCULATE",
    "type": "Choose ONE",
    "prompt": "A visual is filtered to Category = Accessories. A measure uses CALCULATE([Total Sales], Product[Category] = \"Bikes\"). What category does that measure evaluate?",
    "options": [
      "Bikes",
      "Accessories and Bikes together",
      "All categories because the filter is ignored",
      "No categories because CALCULATE cannot filter"
    ],
    "answer": "A",
    "why": "A filter argument on the same column replaces the existing filter on that column unless you use logic such as KEEPFILTERS.",
    "wrong": "The two category values are not automatically combined. CALCULATE can absolutely modify filter context.",
    "remember": "A CALCULATE filter normally replaces a current filter on the same column.",
    "source": "model"
  },
  {
    "id": "m20",
    "topic": "Time intelligence",
    "type": "Choose ONE",
    "prompt": "The fiscal year ends on June 30. A report is filtered to September 15, 2026, and Fiscal YTD Sales must accumulate from July 1, 2026. Which pattern is appropriate?",
    "options": [
      "CALCULATE([Total Sales], DATESYTD(DimDate[Date], \"6/30\"))",
      "CALCULATE([Total Sales], SAMEPERIODLASTYEAR(DimDate[Date]))",
      "TOTALMTD([Total Sales], DimDate[Date])",
      "CALCULATE([Total Sales], REMOVEFILTERS(DimDate))"
    ],
    "answer": "A",
    "why": "DATESYTD supports a year-end argument. With June 30 as year end, the fiscal year begins July 1 and accumulates through the current date context.",
    "wrong": "SAMEPERIODLASTYEAR shifts the period. TOTALMTD accumulates only the month. Removing all date filters does not create fiscal YTD.",
    "remember": "Calendar YTD and fiscal YTD differ; supply the fiscal year end when required.",
    "source": "model"
  },
  {
    "id": "m21",
    "topic": "Time intelligence",
    "type": "Choose ONE",
    "prompt": "You need to compare current-period sales with the equivalent period one year earlier. Which function is commonly used inside CALCULATE?",
    "options": [
      "SAMEPERIODLASTYEAR",
      "VALUES",
      "COUNTROWS",
      "USERELATIONSHIP"
    ],
    "answer": "A",
    "why": "SAMEPERIODLASTYEAR shifts the current date context back one year, which can be applied to a base measure with CALCULATE.",
    "wrong": "VALUES and COUNTROWS do not shift time. USERELATIONSHIP changes relationship use.",
    "remember": "Prior-year comparison → shift the current date period back one year.",
    "source": "model"
  },
  {
    "id": "m22",
    "topic": "Semi-additive measures",
    "type": "Choose ONE",
    "prompt": "InventorySnapshot has one row per Product and Date. [Inventory Qty] sums QuantityOnHand in the current context. Which measure returns the total inventory on the last visible date of each reporting period instead of summing all daily snapshots?",
    "options": [
      "Closing Inventory = CALCULATE([Inventory Qty], LASTDATE(DimDate[Date]))",
      "Closing Inventory = SUM(InventorySnapshot[QuantityOnHand])",
      "Closing Inventory = AVERAGE(InventorySnapshot[QuantityOnHand])",
      "Closing Inventory = CALCULATE([Inventory Qty], SAMEPERIODLASTYEAR(DimDate[Date]))"
    ],
    "answer": "A",
    "why": "LASTDATE restricts the period to its final visible date, producing a semi-additive closing balance across time while still summing products on that date.",
    "wrong": "SUM adds every daily snapshot. AVERAGE does not represent the closing balance. SAMEPERIODLASTYEAR shifts the period rather than selecting its last date.",
    "remember": "Snapshot facts often aggregate across products but not across time; choose the required point in time.",
    "source": "model"
  },
  {
    "id": "m23",
    "topic": "Quick measures",
    "type": "Choose ONE",
    "prompt": "You need a standard year-over-year percentage calculation quickly and want Power BI to generate a DAX starting point that you can inspect. What should you use?",
    "options": [
      "A quick measure.",
      "A report page tooltip.",
      "A calculation group only.",
      "A query parameter."
    ],
    "answer": "A",
    "why": "Quick measures generate common DAX patterns such as time intelligence and comparisons. They are useful for learning or accelerating a standard calculation.",
    "wrong": "Tooltips and parameters serve different purposes. Calculation groups address reusable transformations across measures.",
    "remember": "Quick measures can create a reliable starting DAX pattern.",
    "source": "model"
  },
  {
    "id": "m24",
    "topic": "Calculation groups",
    "type": "Choose ONE",
    "prompt": "Your model has 25 base measures. Report authors need Current, YTD, Prior Year, and YoY % versions of each without creating 100 separate measures. What should you use?",
    "options": [
      "A time-intelligence calculation group.",
      "A calculated column for every measure.",
      "A bidirectional relationship.",
      "A report theme."
    ],
    "answer": "A",
    "why": "Calculation groups apply reusable calculation items to existing measures, reducing repetitive measures for patterns such as time intelligence.",
    "wrong": "Columns, relationships, and themes do not apply transformations to many measures.",
    "remember": "Repeated calculation pattern across many measures → calculation group.",
    "source": "model"
  },
  {
    "id": "m25",
    "topic": "Calculation groups",
    "type": "Choose ONE",
    "prompt": "After creating a calculation group, why should report authors prefer explicit measures rather than relying on implicit column aggregations?",
    "options": [
      "Calculation groups do not apply to implicit measures.",
      "Implicit measures always refresh faster.",
      "Explicit measures cannot be formatted.",
      "Implicit measures create relationships automatically."
    ],
    "answer": "A",
    "why": "Calculation groups are designed to transform explicit measures. A model using them should discourage implicit measures so the intended calculations apply consistently.",
    "wrong": "The other statements are false or irrelevant.",
    "remember": "Calculation groups need explicit measures to be reusable.",
    "source": "model"
  },
  {
    "id": "m26",
    "topic": "Performance",
    "type": "Choose TWO",
    "prompt": "Which TWO model changes commonly reduce Import model size and improve report performance?",
    "options": [
      "Remove columns that are not needed for reporting or relationships.",
      "Filter out rows that are outside the required analysis scope.",
      "Add duplicate copies of every dimension.",
      "Convert numeric keys to long text values.",
      "Create a bidirectional relationship for every table."
    ],
    "answer": "A and B",
    "why": "Unused columns and unnecessary rows consume storage and processing work. Removing them early reduces model size and often improves refresh and query performance.",
    "wrong": "Duplicate dimensions, long text keys, and blanket bidirectional filters tend to add complexity or cost.",
    "remember": "A lean model starts by removing data nobody needs.",
    "source": "model"
  },
  {
    "id": "m27",
    "topic": "Performance",
    "type": "Choose ONE",
    "prompt": "A fact table contains one row per click, but the report only analyzes daily totals by Product and Region. The click-level detail is not required. What is the best optimization?",
    "options": [
      "Aggregate the data to the required daily Product-Region grain before loading.",
      "Add more columns to the click table.",
      "Use a many-to-many relationship.",
      "Hide the table in report view only."
    ],
    "answer": "A",
    "why": "Reducing granularity removes unnecessary rows while retaining the level required by reports. It can substantially improve model size and query speed.",
    "wrong": "More columns and many-to-many relationships do not reduce detail. Hiding a table does not remove its storage cost.",
    "remember": "Load the lowest detail level that still answers the report questions.",
    "source": "model"
  },
  {
    "id": "m28",
    "topic": "Performance Analyzer",
    "type": "Choose TWO",
    "prompt": "A report page feels slow. You must identify the visual responsible and then edit and rerun that visual’s generated DAX query to isolate the bottleneck. Which TWO actions should you take?",
    "options": [
      "Record the page with Performance Analyzer and compare visual durations.",
      "Change every relationship to Both before measuring.",
      "Open or copy the slow visual query into DAX query view.",
      "Remove all report filters before measuring.",
      "Rebuild the page with a different theme."
    ],
    "answer": "A and C",
    "why": "Performance Analyzer identifies which visual and phase consume time. DAX query view lets you inspect, edit, and rerun the generated query for focused analysis.",
    "wrong": "Changing relationships or filters before measuring can hide the true cause. A theme does not diagnose query performance.",
    "remember": "Measure first with Performance Analyzer; investigate the captured DAX second.",
    "source": "model"
  },
  {
    "id": "m29",
    "topic": "DAX query view",
    "type": "Choose ONE",
    "prompt": "Performance Analyzer shows a matrix taking 4.8 seconds: DAX query 4.5 seconds, visual display 0.2 seconds, and other 0.1 seconds. What should you investigate first?",
    "options": [
      "The measures and model operations used by the matrix query.",
      "The report theme colors.",
      "The matrix border thickness.",
      "The page wallpaper image."
    ],
    "answer": "A",
    "why": "Nearly all elapsed time is in the DAX query, so the first investigation should target measure logic, filter context, relationships, and storage/model behavior used by that query.",
    "wrong": "Formatting changes might affect rendering but cannot explain a 4.5-second DAX query duration.",
    "remember": "Use the Performance Analyzer phase breakdown to choose the layer you optimize.",
    "source": "model"
  },
  {
    "id": "m30",
    "topic": "Relationships",
    "type": "Choose TWO",
    "prompt": "Using the Northwind model, which TWO relationship configurations are correct for normal Order Date analysis?",
    "options": [
      "DimDate[DateKey] to FactSales[OrderDateKey] should be active.",
      "DimCustomer[CustomerKey] to FactSales[CustomerKey] should be one-to-many from DimCustomer to FactSales.",
      "DimDate and FactSales should have two active relationships.",
      "FactSales should filter every dimension in both directions by default.",
      "DimProduct should relate directly to DimCustomer."
    ],
    "answer": "A and B",
    "why": "The order-date relationship is the normal active path. Customer is a dimension with a unique key that filters the many sales rows.",
    "wrong": "Only one relationship between the same two tables can be active. Blanket bidirectional filtering and direct dimension-to-dimension links are not normal star-schema design.",
    "remember": "Use active dimension-to-fact relationships for the default analysis path.",
    "source": "model",
    "caseStudy": {
      "title": "Case study: Northwind Traders",
      "intro": "Northwind has FactSales with OrderDateKey, ShipDateKey, CustomerKey, ProductKey, SalesAmount, and Quantity. DimDate has one row per calendar date and a unique DateKey. DimCustomer and DimProduct each have unique keys. Sales reports normally analyze Order Date, but logistics needs Ship Date analysis. The model must remain easy to understand and responsive."
    }
  },
  {
    "id": "m31",
    "topic": "Role-playing dimensions",
    "type": "Choose ONE",
    "prompt": "Using the Northwind model, logistics needs [Ship Date Sales] while Order Date remains the default report date. Which measure pattern is best?",
    "options": [
      "CALCULATE([Total Sales], USERELATIONSHIP(FactSales[ShipDateKey], DimDate[DateKey]))",
      "SUM(FactSales[ShipDateKey])",
      "CALCULATE([Total Sales], FactSales[ShipDateKey] = FactSales[OrderDateKey])",
      "RELATED(DimDate[Date])"
    ],
    "answer": "A",
    "why": "CALCULATE changes the relationship used for this one measure by activating the inactive ShipDate relationship with USERELATIONSHIP.",
    "wrong": "Summing a key is meaningless. Equality does not activate a relationship. RELATED is not an aggregation pattern.",
    "remember": "Keep the common default active; activate the alternate date role inside the specific measure.",
    "source": "model",
    "caseStudy": {
      "title": "Case study: Northwind Traders",
      "intro": "Northwind has FactSales with OrderDateKey, ShipDateKey, CustomerKey, ProductKey, SalesAmount, and Quantity. DimDate has one row per calendar date and a unique DateKey. DimCustomer and DimProduct each have unique keys. Sales reports normally analyze Order Date, but logistics needs Ship Date analysis. The model must remain easy to understand and responsive."
    }
  },
  {
    "id": "m32",
    "topic": "Case study: Contoso Budgeting",
    "type": "Choose ONE",
    "prompt": "Using the Contoso model, Sales is daily by Product while Budget is monthly by Product Category. What is the most appropriate shared modeling approach?",
    "options": [
      "Relate both facts to shared Date and Product dimensions at the grains each fact supports.",
      "Create a direct relationship from FactSales to FactBudget.",
      "Make every relationship bidirectional.",
      "Append daily sales and monthly budget into one table without a type column."
    ],
    "answer": "A",
    "why": "A star schema lets both facts be filtered by conformed dimensions. Budget should use the Date and Product attributes that match its monthly category grain.",
    "wrong": "Fact-to-fact relationships and blanket bidirectional filters commonly create ambiguity. Appending different business processes can confuse measures.",
    "remember": "Multiple facts should share conformed dimensions, not filter each other directly.",
    "source": "model",
    "caseStudy": {
      "title": "Case study: Contoso Budgeting",
      "intro": "Contoso has daily FactSales, monthly FactBudget by Product Category, and shared DimDate and DimProduct tables. The report must compare Sales with Budget by month and category. Analysts have added bidirectional relationships to make slicers work, but some visuals are slow and totals are unexpected."
    }
  },
  {
    "id": "m33",
    "topic": "Case study: Contoso Budgeting",
    "type": "Choose TWO",
    "prompt": "Using the Contoso model, analysts report slow visuals and unexpected totals after enabling bidirectional filters broadly. Which TWO improvements are most appropriate?",
    "options": [
      "Return ordinary dimension-to-fact relationships to single-direction filtering where possible.",
      "Use Performance Analyzer to identify the actual slow visuals before changing DAX.",
      "Keep both direction on every relationship because it is always more accurate.",
      "Add more many-to-many relationships.",
      "Create duplicate fact tables for every visual."
    ],
    "answer": "A and B",
    "why": "Single-direction star-schema relationships are usually simpler and more predictable. Performance Analyzer provides evidence about which visuals need attention.",
    "wrong": "Broad bidirectional and many-to-many relationships can increase ambiguity and cost. Duplicating facts adds model size.",
    "remember": "Simplify relationship paths, then measure performance before tuning.",
    "source": "model",
    "caseStudy": {
      "title": "Case study: Contoso Budgeting",
      "intro": "Contoso has daily FactSales, monthly FactBudget by Product Category, and shared DimDate and DimProduct tables. The report must compare Sales with Budget by month and category. Analysts have added bidirectional relationships to make slicers work, but some visuals are slow and totals are unexpected."
    }
  },
  {
    "id": "m34",
    "topic": "Basic statistical functions",
    "type": "Choose ONE",
    "prompt": "FactSales has multiple line rows per OrderID. A manager needs the median order value, not the median line value. [Order Amount] returns the value for one order in context. Which measure pattern is appropriate?",
    "options": [
      "Median Order Value = MEDIANX(VALUES(FactSales[OrderID]), [Order Amount])",
      "Median Order Value = MEDIAN(FactSales[LineAmount])",
      "Median Order Value = AVERAGE(FactSales[LineAmount])",
      "Median Order Value = DISTINCTCOUNT(FactSales[OrderID])"
    ],
    "answer": "A",
    "why": "VALUES creates the visible order set, and MEDIANX evaluates one order amount for each OrderID before taking the median.",
    "wrong": "MEDIAN over LineAmount answers a different grain. AVERAGE is sensitive to large outliers. DISTINCTCOUNT returns the number of orders.",
    "remember": "Match the iterator table to the business grain before applying a statistical aggregation.",
    "source": "model"
  },
  {
    "id": "m35",
    "topic": "CALCULATE",
    "type": "Choose ONE",
    "prompt": "A visual can be filtered to one or more Channels. [Online Sales] should return Online sales only when Online is included in the user’s Channel selection; if the user excludes Online, the measure should be blank. Which pattern is correct?",
    "options": [
      "CALCULATE([Total Sales], KEEPFILTERS(FactSales[Channel] = \"Online\"))",
      "CALCULATE([Total Sales], FactSales[Channel] = \"Online\")",
      "CALCULATE([Total Sales], REMOVEFILTERS(FactSales[Channel]))",
      "FORMAT([Total Sales], \"Online\")"
    ],
    "answer": "A",
    "why": "KEEPFILTERS intersects the Online condition with the existing Channel filter instead of replacing it. Excluding Online therefore produces no matching rows.",
    "wrong": "A normal CALCULATE Boolean filter replaces an existing filter on the same column. REMOVEFILTERS does the opposite of the requirement. FORMAT returns text.",
    "remember": "Use KEEPFILTERS when a new condition must narrow, not replace, an existing filter on the same column.",
    "source": "model"
  },
  {
    "id": "m36",
    "topic": "Date relationships",
    "type": "Choose ONE",
    "prompt": "A Date dimension contains a DateTime value at midnight, while FactSales stores OrderDateTime values with times throughout the day. A relationship produces unexpected unmatched rows. What should you do?",
    "options": [
      "Create matching date-only values before relating the tables.",
      "Set the relationship to bidirectional.",
      "Change DateKey to a measure.",
      "Hide the unmatched rows in a visual."
    ],
    "answer": "A",
    "why": "Relationship values must match. Removing the time portion or using a proper date key creates compatible values for the common date relationship.",
    "wrong": "Direction does not make different datetime values equal. Measures and hiding rows do not repair the key.",
    "remember": "Relationship columns must use matching values and compatible granularity.",
    "source": "model"
  }
];
