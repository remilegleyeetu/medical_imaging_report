# ICIPEMIR: Improving the completeness, interoperability and patient explanations of medical imaging reports.

Supplementary files related to the academic paper presenting the academic part of the ICIPEMIR project.

1. UML diagram: "Overview"
2. JSON Schema: "Instructions of use"
3. YAML Instance: "Dataset for one ocurence"
4. QR-Code embedding a YAML instance
5. JS file to create the web-based form using Goupile (https://goupile.fr/demo/app/introduction/)
6. Screenshot of the web-based form produced by Goupile


## UML

Fields type:

  - Boolean
  - Integer
  - Real
  - Categorical
  - String
  - Date

Variable with >1 cardinality are grouped and represented in seperate table.  

## JSON

Default syntax for defining each variable is presented through some example:

### Boolean

```JSON
		"conclusion_validation": {
			"type": "boolean",
			"description": "The physician must validate the automatically generated conclusion, after manual modification if required",
			"default": false
		}
```

### Integer

```JSON
		"lithiasis_n": {
			"type": "integer",
			"description": "Number of lithiasis detected on the exam",
			"minimum": 0,
			"maximum": 100
    },  
```

### Real
```JSON
    "renal_height": {
      "type": "number",
      "description": "Measured heigh of the kidney (mm)",
      "minimum": 0
    },

### Categorical

```JSON
		"condition_derivation": {
			"type": "string",
			"description": "Urinary tract diversion in place at the time of the exam",
			"enum": ["No", "Bladder drainage", "Upper tract drainage", "NA"],
			"default": "No"
		},
```    

### String

```JSON
		"patient_first_name": {
			"type": "string",
			"description": "Patient's first name",
      "minLen": ,
			"maxLen": ,
			"pattern": "^$"
      },
```

### Date

```JSON
		"patient_birth": {
			"type": "string",
			"description": "Date of birth, format yyyy-mm-dd",
			"format": "date"
		},
```

### Date-time

```JSON
		"exam_date_time": {
			"type": "string",
			"description": "Date and time of exam, format yyyy-mm-ddThh:mm:ss",
			"format": "date-time"
		},   
```

## YAML

Multitable data is handled by YAML using the "flow style" as described on [YAML website] (https://yaml.org/spec/1.2/spec.html#id2759963)



