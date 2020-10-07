{
	"$schema": "https://json-schema.org/draft/2019-09/schema#",
	"title": "Lithiasis Report",
	"type": "object",
    "required": ["patient_first_name", "patient_first_name", "patient_birth", "conclusion_validation"],
    "properties": {
		"identifier": {
			"type": "string",
			"description": "Patient unique identifier",
			"minLen": 13,
			"maxLen": 13,
			"pattern": "^[0-9aAbB]{13}$"
		},
		"patient_first_name": {
			"type": "string",
			"description": "Patient's first name"
		},
		"patient_name": {
			"type": "string",
			"description": "Patient's name"
		},
		"patient_birth": {
			"type": "string",
			"description": "Date of birth, format yyyy-mm-dd",
			"format": "date"
		},
		"exam_date_time": {
			"type": "string",
			"description": "Date and time of exam, format yyyy-mm-ddThh:mm:ss",
			"format": "date-time"
		},
		"exam_type": {
			"type": "string",
			"description": "Exam type",
			"enum": ["CT", "US", "Radiography", "Radiography + US", "NA"]
		},
		"physician": {
			"type": "string",
			"description": "Physician responsible for the interpretation of the imaging results"
		},
		"device_model": {
			"type": "string",
			"description": "Model of imaging device"
		},
		"device_date": {
			"type": "string",
			"description": "Date of device validation",
			"format": "date"
		},
		"exam_indication": {
			"type": "string",
			"description": "Exam indication",
			"enum": ["Abdominal pain", "Renal insufficiency", "Follow up", "Other", "NA"]
		},
		"condition_contrast": {
			"type": "string",
			"description": "Exam using enhanced contrast agent",
			"enum": ["No", "IV", "IV late phase", "Urinary tract injection", "NA"],
			"default": "No"
		},
		"condition_low_dose": {
			"type": "string",
			"description": "Low dose protocol for CT scan",
			"enum": ["Low dose", "Standard dose", "NA"],
			"default": "Low dose"
		},
		"condition_acute": {
			"type": "string",
			"description": "Acute phase / clinical crisis at the time of the exam",
			"enum": ["No", "Yes", "Unknown", "NA"]
		},
		"condition_fever": {
			"type": "string",
			"description": "Patient febrile at the time of the exam",
			"enum": ["No", "Yes", "Unknown", "NA"],
			"default": "NA"
		},
		"condition_derivation": {
			"type": "string",
			"description": "Urinary tract diversion in place at the time of the exam",
			"enum": ["No", "Bladder drainage", "Upper tract drainage", "NA"],
			"default": "No"
		},
		"condition_radiation": {
			"type": "number",
			"description": "Radiation dose related to the exam, mGy.cm"
		},
		"abnormal_liver": {
			"type": "string",
			"description": "Liver anomaly detected",
			"enum": [ "No", "Yes","Unknown", "NA"],
			"default": "NA"
		},
		"abnormal_adrenals": {
			"type": "string",
			"description": "Adrenals anomaly detected",
			"enum": ["No", "Yes", "Unknown", "NA"],
			"default": "NA"
		},
		"abnormal_pancreas": {
			"type": "string",
			"description": "Pancreas anomaly detected",
			"enum": ["No", "Yes", "Unknown", "NA"],
			"default": "NA"
		},
		"abnormal_spleen": {
			"type": "string",
			"description": "Spleen anomaly detected",
			"enum": ["No", "Yes", "Unknown", "NA"],
			"default": "NA"
		},
		"abnormal_ovaries": {
			"type": "string",
			"description": "Ovarian anomaly detected (if female)",
			"enum": ["No", "Yes", "Unknown", "NA"],
			"default": "NA"
		},
		"abnormal_lymphnode": {
			"type": "string",
			"description": "Abnormal lymphnode detected",
			"enum": ["No", "Yes", "Unknown", "NA"],
			"default": "NA"
		},		
		"infiltration_gallbladder": {
			"type": "string",
			"description": "Infiltration of the gallbladder",
			"enum": ["No", "Yes", "Unknown", "NA"],
			"default": "NA"
		},
		"infiltration_appendix": {
			"type": "string",
			"description": "Infiltration of the appendix",
			"enum": ["No", "Yes", "Unknown", "NA"],
			"default": "NA"
		},
		"infiltration_sigmoid": {
			"type": "string",
			"description": "Infiltration of the sigmoid",
			"enum": ["No", "Yes", "Unknown", "NA"],
			"default": "NA"
		},
		"pneumoperitoneum": {
			"type": "string",
			"description": "Pneumoperitoneum detected",
			"enum": ["No", "Yes", "Unknown", "NA"],
			"default": "NA"
		},
		"intraperitoneal_effusion": {
			"type": "string",
			"description": "Intraperitoneal effusion detected",
			"enum": ["No", "Yes", "Unknown", "NA"],
			"default": "NA"
		},
		"urinary_tract_duplication": {
			"type": "string",
			"description": "Duplication of urinary tract resulting in an 'additionnal' urinary tract to describe",
			"enum": ["No", "Right", "Left", "Bilateral", "Unknown", "NA"],
			"default": "No"
		},
		"renal_transplant": {
			"type": "string",
			"description": "Presence of a renal transplant resulting in an 'additionnal' urinary tract to describe",
			"enum": ["No", "Right", "Left", "Unknown", "NA"],
			"default": "No"
		},
		"bladder_lithiasis":{
			"type": "string",
			"description": "Presence of urolithiasis in the bladder",
			"enum": ["No", "Yes", "NA"],
			"default": "No"
		},
		"pelvic_phlebolith": {
			"type": "string",
			"description": "Presence of pelvic phlebolith(s)",
			"enum": ["No", "Yes", "NA"],
			"default": "No"
		},
		"lithiasis_n": {
			"type": "integer",
			"description": "Number of lithiasis detected on the exam",
			"minimum": 0,
			"maximum": 100
		},
		"lithiasis_results": {
			"type": "object",
			"properties": {
				"lithiasis_id": {
					"type": "string",
					"description": "Generated hash id for each successively described lithiasis",
				},
				"evolution": {
					"type": "string",
					"description": "Evolution of the lithiasis as compared to previous imaging exam",
					"enum": ["New", "Stable", "Modified", "NA"],
					"default": "New"
				},
				"lateralisation": {
					"type": "string",
					"description": "Lateralisation of the uro lithiasis to be described",
					"enum": ["Left", "Right", "Left upper pole", "Left lower pole", "Right upper pole", "Right lower pole", "Left renal transplant", "Right renal transplant", "NA"]
				},
				"location": {
					"type": "string",
					"description": "Location of the uro lithiasis to be described in the previously defined urinary tract",
					"enum": ["Renal pelvis", "Renal major calyx", "Renal minor calyx", "Pelvi-ureteric junction", "Proximal ureter", "Distal ureter", "Vesico-ureteric junction", "Bladder"]
				},
				"coralliform": {
					"type": "string",
					"description": "Coralliform aspect of the urolithiasis",
					"enum": ["No", "Yes", "NA"],
					"default": "No"
				},
				"size": {
					"type": "number",
					"description": "Lithiasis maximal diameter (mm)",
					"exclusiveMinimum": 0,
					"maximum": 200
				},
				"density": {
					"type": "integer",
					"description": "Lithiasis density (Hounsfield Units)",
					"minimum": -1000,
					"maximum": 3000
				},
				"uvj_distance": {
					"type": "number",
					"description": "Distance between the lithiasis and the uretero-vesical junction (cm)",
					"minimum": 0
				},
				"infiltration": {
					"type": "string",
					"description": "Tissue infiltration, caused by the urolithiasis",
					"enum": ["No", "Yes", "Unknown", "NA"],
					"default": "No"
				},
				"obstruction": {
					"type": "string",
					"description": "Urinary tract obstruction sign, caused by the urolithiasis",
					"enum": ["No", "Visible", "Minor calyces dilatation", "Major calyces dilatation", "Pelvic dilatation", "NA"],
					"default": "No"
				},
				"nephrography": {
					"type": "string",
					"description": "Perturbation of the renal perfusion, caused by the urolithiasis (if enhanced contrast CT)",
					"enum": ["Normal", "Retarded", "Non measurable", "NA"],
					"default": "Non measurable"
				},
				"fornix_rupture": {
					"type": "string",
					"description": "Presence of a fornix rupture, caused by the urolithiasis",
					"enum": ["No", "Yes", "Unknown", "NA"],
				},
				"comment": {
					"type": "string",
					"description": "Free text for manually added comment to the uro lithiasis description"
				}
			}
		},
		"urinary_tract_results": {
			"type": "object",
			"description": "Successive description of urinary tracts results, taking account of the (rare) possibility of anatomical variations",
			"properties": {
				"urinary_tract_id": {
					"type": "string",
					"description": "Generated hash id for each successively described urinary tract"
				},
				"lateralisation": {
					"type": "string",
					"description": "Lateralisation of the urinary tract to be described",
					"enum": ["Left", "Right", "Left upper pole", "Left lower pole", "Right upper pole", "Right lower pole", "Left renal transplant", "Right renal transplant"]
				},
				"diversion": {
					"type": "string",
					"description": "Presence of a urinary diversion in the described urinary tract",
					"enum": ["No", "jj_stent", "ureteral_catheter", "pyelostomy", "NA"],
					"default": "No"
				},
				"renal_height": {
					"type": "number",
					"description": "Measured heigh of the kidney (mm)",
					"minimum": 0
				},
				"renal_volume": {
					"type": "number",
					"description": "Measured volume of the kidney (cm3)",
					"minimum": 0
				},
				"renal_contour_deformity": {
					"type": "string",
					"description": "Presence of a morphological anomaly of the renal contour (if non contrast enhanced CT)",
					"enum": ["No", "Yes", "Unknown", "NA"]
				},
				"renal_parenchymal_anomaly": {
					"type": "string",
					"description": "Presence of a parenchymal anomaly of the kidney (if contrast enhanced CT)",
					"enum": ["No", "Yes", "Unknown", "NA"]
				},
				"interlabial_pelvic_diameter": {
					"type": "number",
					"description": "Measured interlabial antero-posterior diameter of the renal pelvis (mm)",
					"minimum": 0
				},
				"extra_sinusal_pelvis": {
					"type": "string",
					"description": "Presence of an extra-sinusal pelvis",
					"enum": ["No", "Yes", "Unknown", "NA"]
				},
				"ureteral_diameter": {
					"type": "number",
					"description": "Maximal measured diameter of the ureter (mm)",
					"minimum": 0
				},
				"ureteral_dilatation": {
					"type": "string",
					"description": "Presence of an abnormal ureteral dilatation",
					"enum": ["No", "Yes", "Unknown", "NA"],
					"default": "No"
				},
				"pyelocaliceal_dilatation": {
					"type": "string",
					"description": "Presence of an abnormal pyelocaliceal dilatation",
					"enum": ["No", "Yes", "Unknown", "NA"],
					"default": "No"
				},
				"pelviureteric_junction": {
					"type": "string",
					"description": "Suspicion of pelvi-ureteric junction syndrom",
					"enum": ["No", "Yes", "Unknown", "NA"],
					"default": "No"
				},
				"urinoma": {
					"type": "string",
					"description": "Presence of a peri-renal urinoma",
					"enum": ["No", "Yes", "Unknown", "NA"],
					"default": "No"
				},
				"hematuria": {
					"type": "string",
					"description": "Presence of hematuria",
					"enum": ["No", "Yes", "Unknown", "NA"],
					"default": "No"
				},
				"pyelonephritis_sign": {
					"type": "string",
					"description": "Presence of pyelonephritis sign",
					"enum": ["No", "Yes", "Unknown", "NA"]
				},
				"comment": {
					"type": "string",
					"description": "Free text for manually added comment to the urinary tract description"
				}
			}
		},
		"findings": {
			"type": "string",
			"description": "Qualification of the findings",
			"enum": ["Normal", "Abnormal compatible with clinical description", "Abnormal not explanatory for clinical description", "Unknown", "NA"]
		},
		"further_imaging": {
			"type": "string",
			"description": "Need for further imaging exam",
			"enum": ["No", "Additionnal imaging exam needed", "Urgent additional imaging exam need", "Unknown", "NA"],
			"default": "No"
		},
		"further_imaging_type": {
			"type": "string",
			"description": "Type of further imaging exam advised"
		},
		"further_physician": {
			"type": "string",
			"description": "Need for further physician opinion",
			"enum": ["No", "Further physician opinion advised", "Urgent physician opinion needed", "Unknown", "NA"],
			"default": "No"
		},
		"further_physician_type": {
			"type": "string",
			"description": "Type of further physician opinion exam advised"
		},
		"control_imaging": {
			"type": "string",
			"description": "Need for control imaging exam",
			"enum": ["No", "Control exam needed", "Unknown", "NA"],
			"default": "No"
		},
		"control_imaging_delay": {
			"type": "string",
			"description": "Time to control imaging exam"
		},
		"comment": {
			"type": "string",
			"description": "Free text for manually added results, or comment"
		},
		"conclusion": {
			"type": "string",
			"description": "Text conclusion, automatically generated, and validated by the imaging physician"
		},
		"conclusion_validation": {
			"type": "boolean",
			"description": "The physician must validate the automatically generated conclusion, after manual modification if required",
			"default": false
		}
	}
}
