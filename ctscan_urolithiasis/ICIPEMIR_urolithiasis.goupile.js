// Lithiasis report Goupile: go to https://goupile.fr/demo/app/introduction/

page.pushOptions({compact: true})

page.output(html`
    <H1><u>Lithiasis Report</u>
`)

// Patient information

page.section("Patient", () => {
    page.text("*identifier", "Patient identifier")
    page.text("*patient_first_name", "First name")
    page.text("*patient_name", "Name")
    page.date("*patient_birth", "Date of birth")
})

// Exam information

page.section("Exam", () => {
    page.date("exam_date_time", "Date and time of the exam")
    page.enum("exam_type", "Exam type", [
        ["CT", "CT scan"],
        ["US", "Ultrasonography"],
        ["Radiography + US", "Radiography AND US"],
        ])
    page.text("physician", "Physician responsible for interpretation"), {value: "PUECH"}
    page.text("device_model", "Imaging device model"), {value: "PUECH"}
    page.date("device_date", "Date of imaging device validation"), {value: 2020-01-01}
    page.enumDrop("exam_indication", "Indication", 
        ["Abdominal pain", "Renal insufficiency", "Follow up", "Other", "NA"])
    page.enumDrop("condition_contrast", "Enhanced contrast agent", 
        ["No", "IV", "IV late phase", "Urinary tract injection", "NA"])
    page.enum("condition_lowdose", "Low dose CT",
        ["Low dose", "Standard dose", "NA"])
    page.enum("condition_acute", "Acute phase / clinical crisis at the time of the exam",
        ["No", "Yes", "Unknown", "NA"])
    page.enum("condition_fever", "Patient febrile at the time of the exam",
        ["No", "Yes", "Unknown", "NA"])
    page.enum("condition_derivation", "Urinary tract diversion in place at the time of the exam",
        ["No", "Bladder drainage", "Upper tract drainage", "NA"])
    page.number("condition_radiation", "Radiation dose related to the exam, mGy.cm", {min:0})
    })

// Results

page.section("Results", () => { 
    page.enum(
        "abnormal_liver", 
        "Liver anomaly detected",
        ["No", "Yes", "Unknown", "NA"])
    page.enum(
        "abnormal_adrenals",
        "Adrenals anomaly detected",
        ["No", "Yes", "Unknown", "NA"])
    page.enum(
        "abnormal_pancreas",
        "Pancreas anomaly detected",
        ["No", "Yes", "Unknown", "NA"])
    page.enum(
        "abnormal_spleen",
        "Splenic anomaly detected",
        ["No", "Yes", "Unknown", "NA"])
    page.enum(
        "abnormal_ovaries",
        "Ovarian anomaly detected",
        ["No", "Yes", "Unknown", "NA"])
    page.enum(
        "abnormal_lymphnode",
        "Abnormal lymphnode detected",
        ["No", "Yes", "Unknown", "NA"])
    page.enum(
        "infiltration_gallbladder",
        "Infiltration of the gallbladder",
        ["No", "Yes", "Unknown", "NA"])    
    page.enum(
        "infiltraion_appendix",
        "Infiltration of the appendix",
        ["No", "Yes", "Unknown", "NA"])
    page.enum(
        "pneumoperitoneum",
        "Pneumoperitoneum detected",
        ["No", "Yes", "Unknown", "NA"])
    page.enum(
        "intraperitoneal_effusion",
        "Intraperitoneal effusion detected",
        ["No", "Yes", "Unknown", "NA"])
    page.enum(
        "duplication",
        "Duplication of urinary tract resulting in an 'additionnal' urinary tract to describe", 
        ["No", "Right", "Left", "Bilateral", "Unknown", "NA"])
    page.enum(
        "renal_transplant",
        "Presence of a renal transplant resulting in an 'additionnal' urinary tract to describe", 
        ["No", "Right", "Left", "Unknown", "NA"])
    page.enum(
        "bladder_lithiasis",
        "Presence of urolithiasis in the bladder",
        ["No", "Yes", "NA"])
    page.enum(
        "pelvic_phlebolith",
        "Presence of pelvic phlebolith(s)",
        ["No", "Yes", "NA"])
    page.slider(
        "n_lithiasis",
        "Nombre de lithiase", {min:0, max:30}) 
    page.textArea("result_comment", "Comment") 
})


// Lithiasis results

page.section("Lithiase", () => { 
   
for (let i = 1; i <= page.value("n_lithiasis"); i++) {
    page.section("Lithiase #" + i, () => {
        page.number(
            "lithiasis_id" + i,
            "ID of the lithiasis", {value:i})
        page.enum(
            "evolution" + i, 
            "Evolution of the lithiasis as compared to previous imaging exam",
            ["New", "Stable", "Modified", "NA"])
        page.enumRadio(
            "lateralisation" + i, 
            "Lateralisation of the uro lithiasis to be described", 
            ["Left", "Right", "Left upper pole", "Left lower pole", "Right upper pole", "Right lower pole", "Left renal transplant", "Right renal transplant", "NA"])
        page.enum(
            "location" + i,
            "Location of the uro lithiasis to be described in the previously defined urinary tract",
            ["Renal pelvis", "Renal major calyx", "Renal minor calyx", "Pelvi-ureteric junction", "Proximal ureter", "Distal ureter", "Vesico-ureteric junction", "Bladder"])
        page.enum(
            "coralliform" + i,
            "Coralliform aspect of the urolithiasis",
            ["No", "Yes", "NA"])
        page.number(
            "size" + i,
            "Lithiasis maximal diameter (mm)", {min:0, max:50})
        page.number(
            "density" + i,
            "Lithiasis density (Hounsfield Units)", {min:-1000, max:+3000})
        page.number(
            "uvj_distance" + i,
            "Distance between the lithiasis and the uretero-vesical junction (cm)", {min:0, max:50})
        page.enum(
            "lithiasis_infiltration" + i,
            "Tissue infiltration, caused by the urolithiasis",
            ["No", "Yes", "Unknown", "NA"])
        page.enumDrop(
            "obstruction" + i,
            "Urinary tract obstruction sign, caused by the urolithiasis",
            ["No", "Visible", "Minor calyces dilatation", "Major calyces dilatation", "Pelvic dilatation", "NA"])
        page.enum(
            "nephrography" + i,
            "Perturbation of the renal perfusion, caused by the urolithiasis (if enhanced contrast CT)",
           ["Normal", "Retarded", "Non measurable", "NA"])
        page.enum(
            "fornix_rupture" + i,
            "Presence of a fornix rupture, caused by the urolithiasis",
           ["No", "Yes", "Unknown", "NA"])
        page.text("comment" + i, "Free text for manually added comment to the uro lithiasis description")
    })
}
})

// Urinary tract results

page.section("Voies urinaires", () => {
    page.slider("n_urinary_tract", "Number of urinary tract to describe", {min:0, max:8})
    for (let u = 1; u <= page.value("n_urinary_tract"); u++) {
            page.section("Urinary tract #" + u, () => {
            page.number("urinary_tract_id" + u, "ID of the urinary tract", {value:u})
            page.enumDrop(
                "urinary_tract" + u, 
                "Lateralisation of the urinary tract to be described", 
                ["Left", "Right", "Left upper pole", "Left lower pole", "Right upper pole", "Right lower pole", "Left renal transplant", "Right renal transplant"])
            page.enum(
                "diversion" + u, 
                "Presence of a urinary diversion in the described urinary tract",
                ["No", "jj_stent", "ureteral_catheter", "pyelostomy", "NA"])
            page.number(
                "renal_height" + u,
                "Measured heigh of the kidney (mm)", {min:0})
            page.number(
                "renal_volume" + u,
                "Measured volume of the kidney (cm3)", {min:0})
            page.enum(
                "renal_contour_deformity" + u, 
                "Presence of a morphological anomaly of the renal contour (if non contrast enhanced CT)",
                ["No", "Yes", "Unknown", "NA"])
            page.enum(
                "renal_parenchyal_anomaly" + u, 
                "Presence of a morphological anomaly of the renal contour (if non contrast enhanced CT)",
                ["No", "Yes", "Unknown", "NA"])
             page.number(
                "interlabial_pelvic_diameter" + u,
                "Measured interlabial antero-posterior diameter of the renal pelvis (mm)", {min:0})
            page.enum(
                "extra_sinusal_pelvis" + u, 
                "Presence of an extra-sinusal pelvis",
                ["No", "Yes", "Unknown", "NA"])
             page.number(
                "ureteral_diameter" + u,
                "Maximal measured diameter of the ureter (mm)", {min:0})
            page.enum(
                "ureteral_dilatation" + u, 
                "Presence of an abnormal ureteral dilatation",
                ["No", "Yes", "Unknown", "NA"])
            page.enum(
                "pyelocaliceal_dilatation" + u, 
                "Presence of an abnormal pyelocaliceal dilatation",
                ["No", "Yes", "Unknown", "NA"])
             page.enum(
                "pelviureteric_junction" + u, 
                "Suspicion of pelvi-ureteric junction syndrom",
                ["No", "Yes", "Unknown", "NA"])
             page.enum(
                "urinoma" + u, 
                "Presence of a peri-renal urinoma",
                ["No", "Yes", "Unknown", "NA"])
             page.enum(
                "pyelonephritis_sign" + u, 
                "Presence of pyelonephritis sign",
                ["No", "Yes", "Unknown", "NA"])
            page.text("urinary_tract_comment" + u, "Free text for manually added comment to the urinary tract description")
    })
    }
})
    
// Conclusion

page.section("Conclusion", () => {
    page.enum("findings", 
    "Qualification of the findings",
    ["Normal", "Abnormal compatible with clinical description", "Abnormal not explanatory for clinical description", "Unknown", "NA"])
    page.enum("further_imaging", 
    "Need for further imaging exam",
    ["No", "Additionnal imaging exam needed", "Urgent additional imaging exam need", "Unknown", "NA"])
    page.text("further_imaging_type", "Type of further imaging exam advised")
    page.enum("control_imaging", 
    "Need for control imaging exam",
    ["No", "Control exam needed", "Unknown", "NA"])
    page.text("control_imaging_delay", "Time to control imaging exam")
    page.textArea("comment_conclusion", "Free text for manually added results, or comment")
    page.binary("*conclusion_validation", "Conclusion Validation", {help:"The physician must validate the automatically generated conclusion, after manual modification if required"})
})
