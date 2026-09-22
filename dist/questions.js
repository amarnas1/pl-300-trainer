window.QUESTION_BANK = [
  {
    "id": 1,
    "topic": "Connect to data",
    "type": "Choose ONE",
    "prompt": "Your organization already has an approved Power BI semantic model containing sales data, relationships and measures. You have Build permission. You must create another report using those definitions without creating a separate local model. What should you do?",
    "options": [
      "Import the original source tables into a new model.",
      "Connect live to the existing Power BI semantic model.",
      "Export a visual to CSV and import the file.",
      "Duplicate the source database."
    ],
    "answer": "B",
    "why": "A semantic model is a reusable collection of data definitions, relationships and calculations. A live connection lets another report use that existing model. Think of several report pages borrowing the same trusted data foundation.",
    "wrong": "A creates another model to maintain. C loses the reusable model definitions. D does not connect the report to the approved model.",
    "remember": "Reuse an approved model when the requirement is consistent definitions and no separate model.",
    "source": "syllabus"
  },
  {
    "id": 2,
    "topic": "Storage modes",
    "type": "Choose ONE",
    "prompt": "A SQL sales table contains 450 million rows and grows by 2 million rows per day. Analysts require fast slicer interactions, data through the previous night is acceptable, and company policy permits data to be copied into Power BI. Which storage approach best meets the requirements?",
    "options": [
      "Use Import mode and refresh the model after the nightly source load.",
      "Use DirectQuery so every visual queries all 450 million source rows.",
      "Use Direct Lake even though the data is not stored in a supported OneLake source.",
      "Create a live connection to an unrelated semantic model."
    ],
    "answer": "A",
    "why": "Import is the best fit when interactive speed matters, a refreshed copy is permitted, and intraday source freshness is not required. The model should also load only the history and columns needed for analysis.",
    "wrong": "DirectQuery adds source-query latency without satisfying a stated requirement. Direct Lake requires a supported OneLake design. An unrelated model cannot provide the required sales data.",
    "remember": "Choose the mode from the source, copy restrictions, freshness target, and interaction-performance requirement together.",
    "source": "modes"
  },
  {
    "id": 3,
    "topic": "Storage modes",
    "type": "Choose ONE",
    "prompt": "A supported SQL database must remain the primary store. Policy forbids importing its transaction rows into the semantic model. Report interactions must query that database. Which mode should you choose?",
    "options": [
      "Import with a daily refresh",
      "Direct Lake over the SQL database",
      "Import with incremental refresh",
      "DirectQuery"
    ],
    "answer": "D",
    "why": "DirectQuery sends queries to the source when visuals need data, subject to caching and other behavior. It meets the explicit requirement to query the supported database without importing the transaction table.",
    "wrong": "A and C still import rows. B is not a generic direct connection to any SQL database. DirectQuery does not mean every visual automatically updates continuously.",
    "remember": "DirectQuery queries the source; freshness still depends on visual refresh and caching.",
    "source": "modes"
  },
  {
    "id": 4,
    "topic": "Storage modes",
    "type": "Choose ONE",
    "prompt": "Your curated data is stored in supported Delta tables in OneLake. Suitable Fabric capacity and permissions are available. You want a semantic model that reads this data without a conventional full Import copy or routine SQL queries for every visual. Which mode is the best fit?",
    "options": [
      "Direct Lake",
      "Import from CSV",
      "DirectQuery to an on-premises database",
      "A live connection to Excel"
    ],
    "answer": "A",
    "why": "Direct Lake is designed for supported data in OneLake. It loads the needed data into the analysis engine from that storage. It is not simply another name for DirectQuery.",
    "wrong": "B creates an imported copy. C uses a different source and query method. D does not describe the required Fabric semantic-model mode.",
    "remember": "Direct Lake connects the semantic-model engine to supported OneLake data.",
    "source": "lake"
  },
  {
    "id": 5,
    "topic": "Credentials",
    "type": "Choose ONE",
    "prompt": "A report combines an organizational SQL source and a public web table. SQL refresh begins failing immediately after the database password is rotated; the web table still refreshes. The queries and privacy classifications have not changed. What should you do first?",
    "options": [
      "Edit permissions for the SQL entry in Data source settings and provide the new credentials.",
      "Change the SQL source privacy level from Organizational to Public.",
      "Delete the web query so only one source remains.",
      "Replace the SQL Source step with a report parameter."
    ],
    "answer": "A",
    "why": "The failure started with a credential change and affects only the SQL source. Updating the saved credentials for that exact source is the most direct corrective action.",
    "wrong": "Privacy level controls isolation, not authentication. Removing a working source does not repair SQL access. A parameter can change a connection value but does not replace credentials.",
    "remember": "Match the repair to the failure: authentication error after password rotation means update that source credential.",
    "source": "syllabus"
  },
  {
    "id": 6,
    "topic": "Privacy levels",
    "type": "Choose ONE",
    "prompt": "A query combines confidential employee records with a public reference feed. Security policy requires the employee source to remain isolated from other sources. Which privacy level should you assign to the employee source?",
    "options": [
      "Public",
      "Private",
      "Organizational",
      "Ignore privacy levels"
    ],
    "answer": "B",
    "why": "Private provides the strongest isolation for a sensitive source. Privacy levels help Power Query control how data can be combined or passed between sources. They do not replace access permissions.",
    "wrong": "Public allows broad data exchange. Organizational is for trusted organizational boundaries, not the strict isolation requested. Ignoring levels defeats this requirement.",
    "remember": "Privacy controls source isolation; credentials control source access.",
    "source": "privacy"
  },
  {
    "id": 7,
    "topic": "Parameters",
    "type": "Choose TWO",
    "prompt": "A query must switch between a development SQL server and a production SQL server without editing the query text each time. Both servers have the same database structure. Which TWO actions should you perform?",
    "options": [
      "Create a text parameter for the server name.",
      "Create a DAX measure containing the server name.",
      "Set the server name column to Whole number.",
      "Use the parameter in the SQL connector’s server argument.",
      "Append the two databases together."
    ],
    "answer": "A and D",
    "why": "A Power Query parameter stores a reusable input. The connection must actually use that input; otherwise changing the parameter has no effect. Credentials and permissions must also be valid for the selected server.",
    "wrong": "B changes model calculations, not the query connection. C is unrelated. E combines data instead of switching environments.",
    "remember": "A parameter works only where the query references it.",
    "source": "parameters"
  },
  {
    "id": 8,
    "topic": "Parameters",
    "type": "Choose ONE",
    "prompt": "You create text parameters named ServerName and DatabaseName. The Orders query still connects with Sql.Database(\"DEV-SQL\", \"SalesDev\"). Changing the parameters has no effect. Which change is required?",
    "options": [
      "Reference ServerName and DatabaseName in the query Source step.",
      "Convert both parameters to DAX measures.",
      "Add the parameters to a report slicer.",
      "Disable query folding for the Orders query."
    ],
    "answer": "A",
    "why": "A parameter changes a query only when a query step references it. Replace the hard-coded connector arguments with the parameter values.",
    "wrong": "DAX measures and slicers operate after data is loaded. Query folding is unrelated to whether the Source step uses a parameter.",
    "remember": "Creating a parameter is only half the task; wire it into the connector or transformation that should change.",
    "source": "parameters"
  },
  {
    "id": 9,
    "topic": "Connect to files",
    "type": "Choose TWO",
    "prompt": "A SharePoint folder receives monthly sales CSV files plus temporary owner files and unrelated documents. Valid sales files share the same schema, and future months must be included automatically. Which TWO actions should you perform?",
    "options": [
      "Connect to the SharePoint Folder source and filter the folder path and file pattern before combining.",
      "Use the Combine Files experience with a representative valid sales file.",
      "Connect separately to every monthly file and append them manually.",
      "Merge the files by SalesAmount.",
      "Remove the file-name and path filters after the first refresh."
    ],
    "answer": "A and B",
    "why": "A folder connection discovers future files, while early path/name filtering prevents temporary or unrelated files from entering the sample-file transformation. Combine Files then applies one repeatable transformation to each valid file.",
    "wrong": "Manual connections do not scale to future files. Merge joins columns by keys rather than stacking monthly rows. Removing filters can admit invalid files.",
    "remember": "Folder pattern: discover files, filter the file list, then combine consistent content.",
    "source": "syllabus"
  },
  {
    "id": 10,
    "topic": "Profiling",
    "type": "Choose TWO",
    "prompt": "A five-million-row import fails because a small number of late rows contain invalid Amount values. The preview of the first 1,000 rows looks valid. You must measure the issue across the full source and retain the failing rows for diagnosis. Which TWO actions should you take?",
    "options": [
      "Change column profiling to evaluate the entire dataset.",
      "Remove Errors from the production query before investigating.",
      "Create a reference diagnostic query and apply Keep Errors to Amount.",
      "Sort the first 1,000 rows by Amount.",
      "Replace every error with zero."
    ],
    "answer": "A and C",
    "why": "Full-dataset profiling reveals quality statistics beyond the preview sample. A reference query with Keep Errors preserves an auditable set of failing rows without destroying the original evidence.",
    "wrong": "Removing or replacing errors before diagnosis hides the source problem. Sorting the preview does not make profiling scan later rows.",
    "remember": "Profile broadly, isolate errors separately, then decide the business-approved repair.",
    "source": "profile"
  },
  {
    "id": 11,
    "topic": "Profiling",
    "type": "Choose ONE",
    "prompt": "A text column contains exactly these values: A, A, B, C, C, D. What are its distinct and unique counts in Power Query profiling?",
    "options": [
      "Distinct 6; unique 4",
      "Distinct 2; unique 4",
      "Distinct 4; unique 4",
      "Distinct 4; unique 2"
    ],
    "answer": "D",
    "why": "There are four different values: A, B, C and D. Only B and D occur once, so there are two unique values in the profiling terminology.",
    "wrong": "The other choices confuse total rows, different values and values occurring only once.",
    "remember": "Distinct = different values. Unique = values appearing once.",
    "source": "profile"
  },
  {
    "id": 12,
    "topic": "Cleaning text",
    "type": "Choose TWO",
    "prompt": "A source contains customer codes \" ab12\", \"AB12\" and \"ab12 \". The business confirms these identify the same customer. Before removing duplicate codes, which TWO transformations should you apply?",
    "options": [
      "Trim whitespace.",
      "Convert the codes to Whole number.",
      "Standardize the letter case.",
      "Replace every code with null.",
      "Append the table to itself."
    ],
    "answer": "A and C",
    "why": "Trim removes unwanted spaces at the edges. Standardizing case makes the same code look the same. Once normalized, deduplication can operate on a consistent identifier.",
    "wrong": "B fails on letters and can damage identifiers. D destroys the key. E adds rows.",
    "remember": "Normalize text before testing equality or removing duplicates.",
    "source": "syllabus"
  },
  {
    "id": 13,
    "topic": "Null values",
    "type": "Choose TWO",
    "prompt": "In Orders, a null DeliveryDate means the order is still open. The fact row must remain available for order-value reporting, and users need an Open/Delivered slicer. Which TWO preparation actions should you take?",
    "options": [
      "Preserve the null DeliveryDate.",
      "Add a conditional DeliveryStatus column based on whether DeliveryDate is null.",
      "Replace null DeliveryDate values with today’s date.",
      "Remove rows with null DeliveryDate.",
      "Fill null dates with the order date."
    ],
    "answer": "A and B",
    "why": "The null has a defined business meaning and the order row is still analytically valid. Preserve the value and expose its meaning with a status column.",
    "wrong": "Inventing a date changes business facts. Removing open orders understates order value and prevents open-order analysis.",
    "remember": "Do not “clean” away a meaningful null; preserve it and make its meaning explicit.",
    "source": "errors"
  },
  {
    "id": 14,
    "topic": "Locale and import errors",
    "type": "Choose ONE",
    "prompt": "A CSV contains dates such as 31/12/2025. Your Desktop locale expects month/day/year, and converting the column to Date produces errors. What should you do?",
    "options": [
      "Use Change Type Using Locale with Date and an appropriate day/month/year locale.",
      "Replace errors with 01/01/2025.",
      "Change the column to Whole number.",
      "Remove all rows containing a day greater than 12."
    ],
    "answer": "A",
    "why": "Locale tells Power Query how to interpret text dates and numbers. A day/month/year locale reads 31/12/2025 correctly as 31 December.",
    "wrong": "B invents dates. C does not parse this date format. D discards valid records.",
    "remember": "A type error can be a format-interpretation problem.",
    "source": "types"
  },
  {
    "id": 15,
    "topic": "Inspecting errors",
    "type": "Choose ONE",
    "prompt": "A numeric conversion creates errors in a few Amount cells. You need a separate diagnostic query containing only the problem rows, while preserving the original query for further repair. What should you do?",
    "options": [
      "Remove Errors from the original query.",
      "Replace all errors with zero.",
      "Remove the Amount column.",
      "Create a diagnostic reference query and apply Keep Errors to Amount."
    ],
    "answer": "D",
    "why": "Keep Errors isolates failing rows for inspection. A separate reference lets you examine those rows without replacing the original query’s result with an error-only table.",
    "wrong": "A removes evidence. B can conceal bad data and distort totals. C loses the field under investigation.",
    "remember": "Inspect the failing values before deciding how to repair them.",
    "source": "errors"
  },
  {
    "id": 16,
    "topic": "Types and identifiers",
    "type": "Choose ONE",
    "prompt": "CustomerID arrives as 000184 in one source and 184 in another. The source owner confirms leading zeros are significant and the field is never used in arithmetic. Before creating a relationship, what should you do?",
    "options": [
      "Use Text in both tables and standardize the identifier format according to the source rule.",
      "Use Whole number in both tables so Power BI removes the zeros.",
      "Use Decimal number in the fact and Text in the dimension.",
      "Leave the data types different and enable bidirectional filtering."
    ],
    "answer": "A",
    "why": "Identifiers with meaningful leading zeros are labels, not quantities. Both relationship columns must use compatible types and a consistent business-approved format.",
    "wrong": "Numeric conversion destroys meaningful zeros. Mismatched types prevent a reliable relationship. Cross-filter direction does not repair key values.",
    "remember": "Keys must match in both type and representation; numeric-looking does not always mean numeric.",
    "source": "types"
  },
  {
    "id": 17,
    "topic": "Numeric types",
    "type": "Choose ONE",
    "prompt": "A financial amount must preserve exactly four decimal places within the supported range. Floating-point approximation must be avoided. Which Power Query type should you select?",
    "options": [
      "Decimal number",
      "Percentage",
      "Fixed decimal number",
      "Whole number"
    ],
    "answer": "C",
    "why": "Fixed decimal number uses a fixed scale of four decimal places. It is useful when that precision meets the financial requirement. Decimal number uses floating-point representation.",
    "wrong": "A can introduce small binary approximation differences. B does not provide this fixed-scale guarantee. D removes the fractional part.",
    "remember": "Choose Fixed decimal when exact four-place precision is required.",
    "source": "types"
  },
  {
    "id": 18,
    "topic": "Create columns",
    "type": "Choose ONE",
    "prompt": "An Orders query contains Quantity and UnitPrice. You need a new LineAmount column equal to their product, while retaining both original columns. What should you use?",
    "options": [
      "Add Column > Custom Column with [Quantity] * [UnitPrice].",
      "Group By Quantity and count rows.",
      "Transpose the table.",
      "Remove UnitPrice and rename Quantity to LineAmount."
    ],
    "answer": "A",
    "why": "A custom column calculates a value for each row during data preparation. Here it multiplies the two fields from the same row and keeps the original fields.",
    "wrong": "B changes the level of detail. C swaps orientation. D renames data without calculating the amount.",
    "remember": "A row-level calculation during preparation belongs in a custom column.",
    "source": "syllabus"
  },
  {
    "id": 19,
    "topic": "Group and aggregate",
    "type": "Choose TWO",
    "prompt": "Your source has one row per sales line. The output must have one row per Region and Month, showing the total SalesAmount. Which TWO choices belong in Group By?",
    "options": [
      "Group by SalesAmount.",
      "Group by Region and Month.",
      "Use Count Rows for SalesAmount.",
      "Use Sum on SalesAmount.",
      "Group by the unique SalesLineID."
    ],
    "answer": "B and D",
    "why": "Grouping defines the output detail: one row for each Region–Month combination. Summing SalesAmount calculates the total within each group. For example, two lines of 20 and 30 become one total of 50.",
    "wrong": "A groups by a measure. C counts lines rather than adding amounts. E preserves individual sales lines and defeats the requested summary.",
    "remember": "Choose the output grain first; then choose the aggregation.",
    "source": "syllabus"
  },
  {
    "id": 20,
    "topic": "Unpivot",
    "type": "Choose ONE",
    "prompt": "A budget table has Department, Jan, Feb and Mar columns. More month columns will arrive later; Department is the only identifier column. You need Department, Month and Budget rows. Which transformation best supports the new columns?",
    "options": [
      "Transpose the whole table.",
      "Pivot Department.",
      "Group by Department and count rows.",
      "Select Department and choose Unpivot Other Columns."
    ],
    "answer": "D",
    "why": "Unpivot Other Columns keeps Department fixed and turns the remaining column headings and values into pairs. Rename Attribute to Month and Value to Budget. New month columns can follow the same transformation.",
    "wrong": "A swaps the whole table’s orientation. B spreads department values into columns. C discards the monthly amounts.",
    "remember": "Keep identifiers; unpivot repeated measure columns.",
    "source": "unpivot"
  },
  {
    "id": 21,
    "topic": "Pivot",
    "type": "Choose ONE",
    "prompt": "A table has Product, Metric and Value. Metric contains Units or Revenue, with exactly one row per Product–Metric pair. You need Product, Units and Revenue columns. What should you do?",
    "options": [
      "Unpivot Product.",
      "Pivot Metric using Value, with Don’t aggregate because each pair is unique.",
      "Transpose twice.",
      "Append Metric to Value."
    ],
    "answer": "B",
    "why": "Pivot turns category values into column headings. Units and Revenue become columns, and Value supplies their contents. The stated uniqueness means no summarization is needed.",
    "wrong": "A moves away from the desired layout. C restores the original orientation. D does not create columns from category values.",
    "remember": "Pivot: values become headings. Unpivot: headings become values.",
    "source": "syllabus"
  },
  {
    "id": 22,
    "topic": "Transpose",
    "type": "Choose TWO",
    "prompt": "An imported worksheet stores field names vertically in the first column: OrderID, CustomerID, and Amount. Every remaining column represents one order. You need one row per order with those field names as headers. Which TWO transformations should you apply, in sequence?",
    "options": [
      "Transpose the table.",
      "Unpivot the first column.",
      "Group by OrderID.",
      "Use the first row as headers after transposing.",
      "Pivot Amount using CustomerID."
    ],
    "answer": "A and D",
    "why": "Transposing turns each order column into a row and moves the vertical field names into the first row. Promoting that row then creates the correct headers.",
    "wrong": "Unpivoting and grouping do not swap the axes. Pivoting Amount does not correct this worksheet orientation.",
    "remember": "When records are stored in columns and field names in rows: transpose first, then promote headers.",
    "source": "syllabus"
  },
  {
    "id": 23,
    "topic": "Semi-structured data",
    "type": "Order ALL four steps",
    "prompt": "An imported JSON value is a list of order records. Each record contains OrderID and an Items list; each item record contains SKU and Quantity. Arrange the steps to produce one row per order item.",
    "options": [
      "A. Expand Items to new rows.",
      "B. Convert the top-level list to a table.",
      "C. Expand each item record to SKU and Quantity.",
      "D. Expand the order record to OrderID and Items."
    ],
    "answer": "B → D → A → C",
    "why": "First make table rows from the outer list. Next expose the order fields. Then expand the nested list so each item gets its own row. Finally expose the item’s fields as columns. OrderID repeats for its items.",
    "wrong": "Expanding item fields before reaching the item records targets the wrong level. Expanding an order’s fields alone leaves the nested list unresolved.",
    "remember": "For nested data, follow the structure from the outside inward.",
    "source": "syllabus"
  },
  {
    "id": 24,
    "topic": "Reference versus duplicate",
    "type": "Match EACH requirement",
    "prompt": "Choose Reference or Duplicate for each requirement. Options can be reused.",
    "options": [
      "1. Create a branch that automatically uses later changes to the original query’s output.",
      "2. Start with a copy of the current steps, then edit the new query independently of later edits to the original query."
    ],
    "answer": "1 = Reference; 2 = Duplicate",
    "why": "Reference depends on the original query’s result. Duplicate copies the current steps without maintaining that dependency. Both can still read the same underlying source; a duplicate is not a frozen snapshot of the source data.",
    "wrong": "A reference does not guarantee one shared cached source read. A duplicate does not automatically inherit later step edits made in the original.",
    "remember": "Reference = dependent branch. Duplicate = independent copy of steps.",
    "source": "reference"
  },
  {
    "id": 25,
    "topic": "Append behavior",
    "type": "Choose ONE",
    "prompt": "Table A has OrderID and Amount. Table B has OrderID, Amount and Channel. You append B to A. What happens to Channel for rows that came from A?",
    "options": [
      "The append always fails.",
      "The values shift into Amount based on column position.",
      "Those rows are removed.",
      "The resulting Channel values are null."
    ],
    "answer": "D",
    "why": "Append stacks rows and aligns columns by name. Channel is included in the result, but A has no value for that field, so its rows receive null.",
    "wrong": "A is not the normal behavior for missing columns. B incorrectly assumes position-based alignment. C invents a filtering step.",
    "remember": "Append aligns column names and fills missing fields with null.",
    "source": "append"
  },
  {
    "id": 26,
    "topic": "Merge join type",
    "type": "Choose TWO",
    "prompt": "Sales is the left table and Products is a unique lookup. You must enrich every sale with ProductName and also produce a separate audit query containing sales whose ProductID has no lookup match. Which TWO merge designs should you use?",
    "options": [
      "Use a left outer merge for the enriched Sales query.",
      "Use a left anti merge for the unmatched-sales audit query.",
      "Use an inner merge for the enriched Sales query.",
      "Use a right anti merge for the unmatched-sales audit query.",
      "Append Products to Sales."
    ],
    "answer": "A and B",
    "why": "Left outer preserves every row from Sales while adding available product fields. Left anti returns only left-side rows without a product match, which is ideal for an audit query.",
    "wrong": "Inner would silently drop unmatched sales. Right anti finds unmatched products, not unmatched sales. Append stacks rows and does not enrich by key.",
    "remember": "Left outer enriches without loss; left anti exposes unresolved left-side keys.",
    "source": "merge"
  },
  {
    "id": 27,
    "topic": "Unmatched keys",
    "type": "Choose ONE",
    "prompt": "Orders is the left table and Customers is the right table. You need only orders whose CustomerID does not exist in Customers. Which merge join should you use?",
    "options": [
      "Inner",
      "Full outer",
      "Left anti",
      "Right outer"
    ],
    "answer": "C",
    "why": "Left anti returns left-side rows that have no match on the right. It is a useful way to identify unmatched foreign keys.",
    "wrong": "Inner returns matches. Full outer mixes matched and unmatched records. Right outer prioritizes keeping the customer side.",
    "remember": "Anti join: find missing matches.",
    "source": "merge"
  },
  {
    "id": 28,
    "topic": "Keys for relationships",
    "type": "Choose ONE",
    "prompt": "Product codes are unique only within a company. Both Sales and Products contain CompanyID and ProductCode. The final dimension needs one unique ProductKey, which Sales must also use. What is the best preparation design?",
    "options": [
      "Join on ProductCode alone.",
      "Create one dimension row per CompanyID–ProductCode pair, assign a ProductKey, and merge that key into Sales using both original columns.",
      "Add unrelated index columns independently to Sales and Products and match the index numbers.",
      "Remove CompanyID from both tables."
    ],
    "answer": "B",
    "why": "The business identity is the pair of values. Build a unique dimension at that level, then look up its assigned key on each sales row using the same pair. For recurring production loads, keep surrogate-key assignments stable rather than assuming an index never changes.",
    "wrong": "A confuses products from different companies. C assigns unrelated numbers. D removes information needed to distinguish products.",
    "remember": "Keys must identify the same entity on both sides.",
    "source": "syllabus"
  },
  {
    "id": 29,
    "topic": "Query loading",
    "type": "Choose ONE",
    "prompt": "StagingSales supplies two final reference queries, FactSales and DimCustomer. Only the two final tables should be loaded into the model. Their refresh must continue to work. What should you do?",
    "options": [
      "Delete StagingSales.",
      "Disable loading for FactSales and DimCustomer.",
      "Turn StagingSales into a DAX measure.",
      "Disable Enable load for StagingSales while retaining the query."
    ],
    "answer": "D",
    "why": "A staging query can participate in transformations without becoming a model table. Disabling its load removes the extra model output while allowing dependent queries to use its logic. It can still be evaluated during refresh.",
    "wrong": "A breaks the dependencies. B removes the required outputs. C changes the object into something unrelated.",
    "remember": "Not loaded does not mean never evaluated.",
    "source": "reference"
  },
  {
    "id": 30,
    "topic": "Fact and dimension preparation",
    "type": "Choose ONE",
    "prompt": "A sales export repeats ProductName and Category on every order line. Analysts need detailed line-level sales plus a reusable product lookup. Which preparation approach is appropriate?",
    "options": [
      "Create a product dimension with one row per ProductID and a sales fact table retaining line-level transactions and ProductID.",
      "Keep only one sales line per ProductID.",
      "Put every distinct SalesAmount into a dimension and discard product identifiers.",
      "Aggregate all sales into one grand-total row."
    ],
    "answer": "A",
    "why": "The fact table records events: here, sales lines. The product dimension describes the product once per key. This separates transaction detail from reusable descriptive attributes. Validate that each ProductID has a consistent description.",
    "wrong": "B deletes valid transactions. C uses an amount as an entity identifier. D loses the required detail.",
    "remember": "Facts describe events and quantities; dimensions describe entities.",
    "source": "syllabus"
  },
  {
    "id": 31,
    "topic": "Applied Steps troubleshooting",
    "type": "Choose TWO",
    "prompt": "A source column is renamed from CustomerNo to CustomerID. Refresh fails in a Removed Other Columns step, and later steps still reference CustomerNo. The business confirms the field meaning is unchanged. Which TWO actions should you take?",
    "options": [
      "Update the earliest affected selection or rename step for CustomerID.",
      "Review and update downstream steps that still reference CustomerNo.",
      "Replace all refresh errors with zero.",
      "Delete every step after Source.",
      "Change CustomerID to a measure."
    ],
    "answer": "A and B",
    "why": "Repair the schema reference at the first failing step, then validate dependent steps that use the old name. This preserves the intended transformations.",
    "wrong": "Replacing errors hides a structural failure. Deleting transformations discards business logic. A measure cannot repair a Power Query schema reference.",
    "remember": "Fix a schema change at the earliest broken step, then trace its downstream dependencies.",
    "source": "errors"
  },
  {
    "id": 32,
    "topic": "Conditional columns",
    "type": "Choose ONE",
    "prompt": "During data preparation, Amount must be classified as Unknown when null, Standard when below 1,000, and Large otherwise. Which Power Query M expression is correct?",
    "options": [
      "if [Amount] = null then \"Unknown\" else if [Amount] < 1000 then \"Standard\" else \"Large\"",
      "IF([Amount] < 1000, \"Standard\", \"Large\")",
      "if [Amount] < 1000 then \"Standard\" else if [Amount] = null then \"Unknown\" else \"Large\"",
      "CASE WHEN Amount IS NULL THEN \"Unknown\" WHEN Amount < 1000 THEN \"Standard\" ELSE \"Large\" END"
    ],
    "answer": "A",
    "why": "Power Query M uses lowercase if, then, and else. The null test must occur before the numeric comparison so null values receive the intended label.",
    "wrong": "The second expression is DAX-style syntax. The third evaluates the numeric test before handling null. The fourth is SQL syntax.",
    "remember": "In nested conditions, handle exceptional values first and use the syntax of the current layer: M in Power Query.",
    "source": "syllabus"
  },
  {
    "id": 33,
    "topic": "Case study: types",
    "type": "Choose TWO",
    "prompt": "Using the Northstar case, which TWO preparation choices should you make?",
    "options": [
      "Keep CustomerID as Text in both tables.",
      "Convert CustomerID to Whole number in both tables.",
      "Interpret OrderDate using an appropriate day/month/year locale and Date type.",
      "Replace all OrderDate conversion errors with today’s date.",
      "Remove duplicate OrderID values from sales."
    ],
    "answer": "A and C",
    "why": "Text preserves identifiers such as 00125. A matching date locale converts the source text into the intended dates. Apply consistent identifier types to support matching.",
    "wrong": "B changes the identifiers. D invents dates. E would delete legitimate order lines because an order can contain several lines.",
    "remember": "Preserve identifiers and respect the actual row grain.",
    "source": "types",
    "caseStudy": {
      "title": "Case study: Northstar Retail",
      "intro": "Northstar Retail receives monthly CSV files containing OrderID, LineNo, OrderDate, CustomerID, ProductID, Quantity and Amount. One row is one order line, identified by OrderID plus LineNo. OrderDate is day/month/year text; CustomerID may contain leading zeros. The Customers master currently contains duplicate rows for some CustomerID values. The business confirms those duplicates are exact copies and wants one customer row per CustomerID. Every order line must be retained, including lines without a matching customer. The final model should load FactSales and DimCustomer only, with a refreshed copy of data each morning."
    }
  },
  {
    "id": 34,
    "topic": "Case study: preparation sequence",
    "type": "Order ALL four steps",
    "prompt": "CustomerID types and formats already match. Arrange these actions to enrich every sales line with customer attributes without multiplying rows.",
    "options": [
      "A. Merge Sales (left) with the deduplicated Customers query (right), using a left outer join on CustomerID.",
      "B. Expand the required customer attributes.",
      "C. Remove the confirmed exact duplicate customer rows so CustomerID is unique.",
      "D. Validate that sales-line count and total Amount match the pre-merge values."
    ],
    "answer": "C → A → B → D",
    "why": "First make the lookup unique. Next match sales to that lookup while keeping every sale. Expanding then adds attributes without multiplying sales lines. Finally compare counts and totals with the original.",
    "wrong": "Merging and expanding before removing duplicate lookup rows can multiply a sale and inflate its amount. Validating only before expansion misses that multiplication.",
    "remember": "A lookup should have one matching row per key when each fact row needs one description.",
    "source": "syllabus",
    "caseStudy": {
      "title": "Case study: Northstar Retail",
      "intro": "Northstar Retail receives monthly CSV files containing OrderID, LineNo, OrderDate, CustomerID, ProductID, Quantity and Amount. One row is one order line, identified by OrderID plus LineNo. OrderDate is day/month/year text; CustomerID may contain leading zeros. The Customers master currently contains duplicate rows for some CustomerID values. The business confirms those duplicates are exact copies and wants one customer row per CustomerID. Every order line must be retained, including lines without a matching customer. The final model should load FactSales and DimCustomer only, with a refreshed copy of data each morning."
    }
  },
  {
    "id": 35,
    "topic": "Case study: assess statements",
    "type": "Answer YES or NO for EACH statement",
    "prompt": "Using the Northstar case, assess these proposed solutions.",
    "options": [
      "1. Import mode with a refresh after the morning source update meets the stated storage and freshness requirements.",
      "2. Using an inner join to Customers guarantees that every sales line remains.",
      "3. Removing duplicates based only on OrderID safely preserves the order-line grain.",
      "4. A staging query can have Enable load disabled and still supply FactSales through a reference."
    ],
    "answer": "1 = Yes; 2 = No; 3 = No; 4 = Yes",
    "why": "1: The requirement explicitly allows a refreshed copy. 2: Inner join drops unmatched sales. 3: Several valid lines may share OrderID. 4: Load controls whether the staging result becomes a model table, not whether dependents can use it.",
    "wrong": "The traps are confusing orders with order lines, and confusing an intermediate query with a loaded table.",
    "remember": "Translate every requirement into a check: freshness, retained rows, grain and loaded outputs.",
    "source": "syllabus",
    "caseStudy": {
      "title": "Case study: Northstar Retail",
      "intro": "Northstar Retail receives monthly CSV files containing OrderID, LineNo, OrderDate, CustomerID, ProductID, Quantity and Amount. One row is one order line, identified by OrderID plus LineNo. OrderDate is day/month/year text; CustomerID may contain leading zeros. The Customers master currently contains duplicate rows for some CustomerID values. The business confirms those duplicates are exact copies and wants one customer row per CustomerID. Every order line must be retained, including lines without a matching customer. The final model should load FactSales and DimCustomer only, with a refreshed copy of data each morning."
    }
  },
  {
    "id": 36,
    "topic": "Case study: diagnose duplication",
    "type": "Choose ONE",
    "prompt": "Before customer deduplication, one order line with Amount = 120 matches two identical customer rows. After a left outer merge and expansion of customer fields, what happens to that line’s contribution if Amount is summed?",
    "options": [
      "It remains one row contributing 120 because a left outer join removes duplicates.",
      "It becomes two rows contributing 240.",
      "It becomes zero rows because duplicate keys cause an automatic rejection.",
      "It becomes one row contributing 60."
    ],
    "answer": "B",
    "why": "A matching lookup row is returned for each match. Two customer matches can therefore produce two copies of the same sales line after expansion: 120 + 120 = 240. This is why the lookup must be made unique first.",
    "wrong": "A assumes automatic deduplication, which does not happen. C assumes an automatic key constraint in a merge. D invents an allocation rule.",
    "remember": "A successful merge can still produce incorrect totals.",
    "source": "syllabus",
    "caseStudy": {
      "title": "Case study: Northstar Retail",
      "intro": "Northstar Retail receives monthly CSV files containing OrderID, LineNo, OrderDate, CustomerID, ProductID, Quantity and Amount. One row is one order line, identified by OrderID plus LineNo. OrderDate is day/month/year text; CustomerID may contain leading zeros. The Customers master currently contains duplicate rows for some CustomerID values. The business confirms those duplicates are exact copies and wants one customer row per CustomerID. Every order line must be retained, including lines without a matching customer. The final model should load FactSales and DimCustomer only, with a refreshed copy of data each morning."
    }
  },
  {
    "id": 37,
    "topic": "Case study: Northstar data quality",
    "type": "Choose TWO",
    "prompt": "Using the Northstar case, which TWO checks should you perform after building FactSales?",
    "options": [
      "Confirm the row count and total Amount match the cleaned sales staging query.",
      "Remove all repeated OrderID values.",
      "Confirm that each OrderID plus LineNo combination is unique.",
      "Replace unmatched CustomerID values with a random valid customer.",
      "Convert CustomerID to a decimal number."
    ],
    "answer": "A and C",
    "why": "FactSales is one row per order line. Reconcile the fact table with its staging query and check the declared composite business key. These checks can expose accidental row loss, duplication, or a changed grain.",
    "wrong": "B removes valid order lines from multi-line orders. D hides data-quality issues. E changes an identifier into a quantity type.",
    "remember": "Validate both totals and the declared row grain after transformation.",
    "source": "syllabus",
    "caseStudy": {
      "title": "Case study: Northstar Retail",
      "intro": "Northstar Retail receives monthly CSV files containing OrderID, LineNo, OrderDate, CustomerID, ProductID, Quantity and Amount. One row is one order line, identified by OrderID plus LineNo. OrderDate is day/month/year text; CustomerID may contain leading zeros. The Customers master currently contains duplicate rows for some CustomerID values. The business confirms those duplicates are exact copies and wants one customer row per CustomerID. Every order line must be retained, including lines without a matching customer. The final model should load FactSales and DimCustomer only, with a refreshed copy of data each morning."
    }
  },
  {
    "id": 38,
    "topic": "Case study: Northstar source change",
    "type": "Choose ONE",
    "prompt": "Using the Northstar case, next month’s file adds a new column named SalesChannel. The existing append query combines monthly files. What should you expect after refresh?",
    "options": [
      "The append always fails because schemas must be identical.",
      "SalesChannel appears in the result and earlier months receive null for it.",
      "SalesChannel values move into Amount because it is the last column.",
      "All earlier months are deleted."
    ],
    "answer": "B",
    "why": "Append aligns columns by their names and produces the union of the available column headers. Older files have no SalesChannel value, so their appended rows show null in that field.",
    "wrong": "A is not the normal append behavior. C incorrectly assumes alignment by position. D invents a deletion step.",
    "remember": "When source columns vary, append aligns names and uses null for missing values.",
    "source": "append",
    "caseStudy": {
      "title": "Case study: Northstar Retail",
      "intro": "Northstar Retail receives monthly CSV files containing OrderID, LineNo, OrderDate, CustomerID, ProductID, Quantity and Amount. One row is one order line, identified by OrderID plus LineNo. OrderDate is day/month/year text; CustomerID may contain leading zeros. The Customers master currently contains duplicate rows for some CustomerID values. The business confirms those duplicates are exact copies and wants one customer row per CustomerID. Every order line must be retained, including lines without a matching customer. The final model should load FactSales and DimCustomer only, with a refreshed copy of data each morning."
    }
  },
  {
    "id": 39,
    "topic": "Case study: Northstar error policy",
    "type": "Choose ONE",
    "prompt": "Using the Northstar case, a few OrderDate values cannot be converted even after applying the confirmed day/month/year locale. The source team must correct those records, and analysts must not silently include them with invented dates. What is the best approach?",
    "options": [
      "Replace conversion errors with today’s date.",
      "Keep the failed rows in a diagnostic query and exclude them from the reporting fact until corrected.",
      "Convert every date to Text permanently.",
      "Remove the OrderDate column from FactSales."
    ],
    "answer": "B",
    "why": "Once the intended format is confirmed, remaining errors are genuinely bad data. Keep evidence for correction and prevent invalid records from misleading date analysis. This is a business-rule choice, so communicate the excluded rows.",
    "wrong": "A fabricates data. C avoids rather than resolves the date issue. D removes a useful analytical field.",
    "remember": "Do not hide a known data error by inventing a value.",
    "source": "errors",
    "caseStudy": {
      "title": "Case study: Northstar Retail",
      "intro": "Northstar Retail receives monthly CSV files containing OrderID, LineNo, OrderDate, CustomerID, ProductID, Quantity and Amount. One row is one order line, identified by OrderID plus LineNo. OrderDate is day/month/year text; CustomerID may contain leading zeros. The Customers master currently contains duplicate rows for some CustomerID values. The business confirms those duplicates are exact copies and wants one customer row per CustomerID. Every order line must be retained, including lines without a matching customer. The final model should load FactSales and DimCustomer only, with a refreshed copy of data each morning."
    }
  },
  {
    "id": 40,
    "topic": "Case study: Contoso reshape",
    "type": "Choose ONE",
    "prompt": "Using the Contoso case, what transformation should you apply to each quarterly sales file before appending the files?",
    "options": [
      "Select ProductID and Region, then choose Unpivot Other Columns.",
      "Pivot ProductID using QuantityOnHand.",
      "Transpose the whole table.",
      "Group by Region and count rows."
    ],
    "answer": "A",
    "why": "ProductID and Region identify the sales series. The monthly headings should become a single Month field with a Sales value, creating a scalable row-based fact structure before you append quarters.",
    "wrong": "B uses an inventory field that is not in the sales files. C changes the entire layout. D discards sales amounts.",
    "remember": "Keep identifiers; unpivot the repeating monthly measures.",
    "source": "unpivot",
    "caseStudy": {
      "title": "Case study: Contoso supply and sales",
      "intro": "Contoso receives quarterly files with ProductID, Region, and one column for each month of sales. New month columns can appear in later files. A separate Product master contains one row per ProductID. An inventory file contains ProductID, SnapshotDate, and QuantityOnHand, with one row per product per snapshot date. The final model must support monthly sales analysis and inventory-as-of-date analysis."
    }
  },
  {
    "id": 41,
    "topic": "Case study: Contoso fact grain",
    "type": "Choose ONE",
    "prompt": "After unpivoting the Contoso sales files, what should one row in FactSales represent?",
    "options": [
      "One product, region, and month combination.",
      "One ProductID only.",
      "One calendar year only.",
      "One inventory snapshot only."
    ],
    "answer": "A",
    "why": "The identifiers ProductID and Region remain, and each former month heading becomes a value in Month. Therefore each fact row represents the sales amount for one product in one region in one month.",
    "wrong": "B is too broad because product has multiple regions and months. C loses detail. D describes the separate inventory fact.",
    "remember": "State the row grain in one sentence before designing the fact table.",
    "source": "syllabus",
    "caseStudy": {
      "title": "Case study: Contoso supply and sales",
      "intro": "Contoso receives quarterly files with ProductID, Region, and one column for each month of sales. New month columns can appear in later files. A separate Product master contains one row per ProductID. An inventory file contains ProductID, SnapshotDate, and QuantityOnHand, with one row per product per snapshot date. The final model must support monthly sales analysis and inventory-as-of-date analysis."
    }
  },
  {
    "id": 42,
    "topic": "Case study: Contoso dimensions",
    "type": "Choose TWO",
    "prompt": "Using the Contoso case, which TWO preparation steps support clean relationships in the model?",
    "options": [
      "Create a product dimension with one row per ProductID.",
      "Use the sales fact table as the product dimension.",
      "Ensure ProductID has the same data type in the facts and product dimension.",
      "Create a relationship using QuantityOnHand.",
      "Remove SnapshotDate from inventory."
    ],
    "answer": "A and C",
    "why": "A dimension must have one row per product key, and matching columns must use compatible types. Both FactSales and FactInventory can relate to that single product dimension.",
    "wrong": "B repeats products at fact grain. D uses a measure, not an entity key. E removes the field that defines inventory snapshot grain.",
    "remember": "Relationships connect matching entity keys, not quantities.",
    "source": "syllabus",
    "caseStudy": {
      "title": "Case study: Contoso supply and sales",
      "intro": "Contoso receives quarterly files with ProductID, Region, and one column for each month of sales. New month columns can appear in later files. A separate Product master contains one row per ProductID. An inventory file contains ProductID, SnapshotDate, and QuantityOnHand, with one row per product per snapshot date. The final model must support monthly sales analysis and inventory-as-of-date analysis."
    }
  },
  {
    "id": 43,
    "topic": "Case study: Contoso inventory",
    "type": "Choose ONE",
    "prompt": "The inventory file contains one row per ProductID and SnapshotDate. Which data-quality check best verifies its declared business key?",
    "options": [
      "Check that ProductID alone is unique.",
      "Check that SnapshotDate alone is unique.",
      "Check that the ProductID plus SnapshotDate combination is unique.",
      "Check that QuantityOnHand is unique."
    ],
    "answer": "C",
    "why": "A product appears in many snapshots, and one date contains many products. The pair identifies the record. Testing the composite key catches duplicate snapshots without rejecting valid history.",
    "wrong": "A and B reject valid history. D treats a quantity as an identifier.",
    "remember": "A key must match the table’s real grain.",
    "source": "syllabus",
    "caseStudy": {
      "title": "Case study: Contoso supply and sales",
      "intro": "Contoso receives quarterly files with ProductID, Region, and one column for each month of sales. New month columns can appear in later files. A separate Product master contains one row per ProductID. An inventory file contains ProductID, SnapshotDate, and QuantityOnHand, with one row per product per snapshot date. The final model must support monthly sales analysis and inventory-as-of-date analysis."
    }
  },
  {
    "id": 44,
    "topic": "Case study: Contoso query design",
    "type": "Choose ONE",
    "prompt": "You need a second query that creates a monthly sales summary from the cleaned, unpivoted sales staging query. Future fixes to the staging query should automatically flow into the summary. What should you create?",
    "options": [
      "A reference to the staging query.",
      "A duplicate of the staging query.",
      "A new Enter Data table.",
      "A DAX measure that changes the source query."
    ],
    "answer": "A",
    "why": "A reference is a dependent branch. It starts from the staging query’s output, so later transformation changes can flow into the summary.",
    "wrong": "B copies current steps but is independent of later edits. C is manual data. D cannot replace source-query preparation.",
    "remember": "Use a reference when a new query should follow the parent query’s output.",
    "source": "reference",
    "caseStudy": {
      "title": "Case study: Contoso supply and sales",
      "intro": "Contoso receives quarterly files with ProductID, Region, and one column for each month of sales. New month columns can appear in later files. A separate Product master contains one row per ProductID. An inventory file contains ProductID, SnapshotDate, and QuantityOnHand, with one row per product per snapshot date. The final model must support monthly sales analysis and inventory-as-of-date analysis."
    }
  },
  {
    "id": 45,
    "topic": "Case study: Contoso reconciliation",
    "type": "Choose ONE",
    "prompt": "After appending and unpivoting the Contoso quarterly files, total Sales is unexpectedly higher than the source total. Which issue should you investigate first?",
    "options": [
      "A merge to Product master that expanded more than one matching product row per ProductID.",
      "Whether the Month column has a Date type.",
      "Whether a report page has a theme.",
      "Whether the sales table is hidden."
    ],
    "answer": "A",
    "why": "A product lookup with duplicate ProductID values can multiply sales rows during merge and expansion, inflating totals. Check the product dimension is unique before investigating report formatting.",
    "wrong": "B affects interpretation, not the usual cause of multiplied amounts. C and D have no effect on transformed row totals.",
    "remember": "Unexpectedly high totals after a merge often mean the lookup was not unique.",
    "source": "merge",
    "caseStudy": {
      "title": "Case study: Contoso supply and sales",
      "intro": "Contoso receives quarterly files with ProductID, Region, and one column for each month of sales. New month columns can appear in later files. A separate Product master contains one row per ProductID. An inventory file contains ProductID, SnapshotDate, and QuantityOnHand, with one row per product per snapshot date. The final model must support monthly sales analysis and inventory-as-of-date analysis."
    }
  }
];
