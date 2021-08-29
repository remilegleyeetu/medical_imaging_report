// Lithiasis report Goupile: go to https://goupile.fr/demo/app/introduction/

page.pushOptions({compact: true})

page.output(html`
    <H1><u>Urine tract ultrasound Report</u>
`)

// Patient information

page.section("Patient", () => {
    page.text("*identifier", "Patient identifier")
    page.text("*patient_first_name", "First name")
    page.text("*patient_name", "Name")
    page.date("*patient_birth", "Date of birth")    
    page.enumRadio("patient_gender", "Gender", 
        ["Male", "Female"])
 
})

// Exam information

page.section("Exam", () => {
    page.text("institution", "Institution"),
    page.text("physician", "Physician responsible for interpretation"),
    page.date("exam_date", "Date of the exam")
    page.text("device_model", "Imaging device model",) 
    page.date("device_date", "Date of imaging device validation"),
    page.text("exam_indication", "Indication",)
    page.enum("condition_derivation", "Urinary tract diversion in place at the time of the exam",
        ["No", "Bladder drainage", "Upper tract drainage", "NA"])
    })

// Results

page.section("Results", () => { 

    page.enumDrop("duplication", "Duplication of urinary tract resulting in an 'additionnal' urinary tract to describe",["No", "Right", "Left", "Bilateral", "Unknown", "NA"], {
        value: "No",
        })
    page.enumDrop(
        "renal_transplant",
        "Presence of a renal transplant resulting in an 'additionnal' urinary tract to describe", 
        ["No", "Right", "Left", "Unknown", "NA"], {value: "No",})
    page.enumDrop("abdominal_effusion","Presence of a abdominal effusion",["No", "Right", "Left", "Unknown", "NA"],{value: "No",})
})

// Urinary upper tract results

page.section("Urinary upper tract", () => {
    page.slider("n_urinary_upper_tract", "Number of urinary tract to describe", {min:0, max:8,value: 2,})
    for (let u = 1; u <= page.value("n_urinary_upper_tract"); u++) {
            page.section("Urinary upper tract #" + u, () => {
            page.number("urinary_upper_tract_id" + u, "ID of the urinary upper tract", {value:u})
            page.enumDrop("urinary_upper_tract" + u, 
                "Lateralisation of the urinary upper tract to be described", 
                ["Left", "Right", "Left upper pole", "Left lower pole", "Right upper pole", "Right lower pole", "Left renal transplant", "Right renal transplant"])
            page.enum("diversion" + u, 
                "Presence of a urinary diversion in the described urinary tract",
                ["No", "jj_stent", "ureteral_catheter", "pyelostomy", "NA"])
            page.output(html`<u><b>Size</b></u>`)
            page.number("renal_height" + u,
                "Measured heigh of the kidney", {min:0,suffix:"mm"})
            page.sameLine(true);page.multiCheck("evolution"+ u,"Evolution",["Click to open"])
            if (page.value("evolution" + u) == "Click to open") {
            page.enum("evolution_of_renal_height" + u, 
                "Evolution of the size according to the last ultrasound", 
                ["Increase", "Decrease","Stable", "Unknown", "NA"])
            page.number("previous_renal_height" + u,
                "Previous measured heigh of the kidney", {min:0,suffix:"mm"}) }
            page.output(html`<u><b>Dilatation</b></u>`)
            page.enum("pelvic_dilatation" + u, 
                "Presence of pelvic dilatation of the kidney",
                [["No"], ["Yes"], ["Unknown"], ["NA"]])
            if (page.value("pelvic_dilatation" + u) == "Yes") {
                page.number("anteroposterior_diameter_of_the_renal_pelvis", "Measurements of the anteroposterior diameter of the renal pelvis on a transverse section in mm", {min:0,suffix:"mm"})
                page.enum("evolution_of_APD","Evolution of the APD as compared to previous imaging exam",["Increased", "Stable", "Decreased","Unknown", "NA"])
                page.number("extrarenal_pelvis_diameter","Measurements of the anteroposterior diameter of the extrarenal pelvis on a transverse section in mm",{min:0,suffix: "mm"})
                page.enum("caliceal_dilatation","description of the appearance of the calyces",["No", "Cup-shaped calyces","Blunting of calyces","Ballooned Calyces","Unknown", "NA"])
                }
            page.output(html`<u><b>Pelvis aspect</b></u>`)
            page.enum("renal_pelvic_wall" + u, 
                "Presence of a thickened renal pelvic wall",
                ["Normal", "Thickened", "Unknown", "NA"])
            page.enum("renal_pelvis_content_echogenicity" + u, 
                "Description of the echogenicity of the renal pelvis contents",
                ["Normal", "Hypoechoic", "Hyperechoic", "Unknown", "NA"])
            page.output(html`<u><b>Parenchyma</b></u>`)
            page.enum("echogenicity_of_parenchyma" + u,"Echogenicity of parenchyma",
                ["Normal","Hyperechogenic cortex","NA"])
            page.enum("degree_of_corticomedullary_differentiation" + u,"Aspect of corticomedullary differentiation",
                ["Normal","Decreased","No cortico medullary differentiation","NA"])
            page.enum("parenchyma_aspect" + u,"Description of cortex and medulla",
                ["Normal","Short and thin medulla","No medulla & thin cortex","NA"])
            page.number("parenchyma_thickness" + u,"The renal parenchyma is measured at the thinnest point of the parenchyma on the longitudinal section of the kidney(mm)",{min:0,suffix: "mm"})
            page.multiCheck("presence_of" + u, "Presence of:",["Cortical cyst","Ureterocele"])
            if (page.value("presence_of" + u) == "Cortical cyst") {
                    page.sameLine(true);page.enum("cortical_cyst" + u,"Cysts detected on the exam",["No", "Presence", "NA"],{value:"Presence"})
                    page.textArea("comment_on_cyst" + u,"Free text for a comment manually added to the description of the cyst")}
            if (page.value("presence_of" + u) == "Ureterocele") {
                    page.sameLine(true);page.enum("ureterocele" + u,"Ureterocele detected on the exam",["No", "Presence", "NA"],{value:"Presence"})
                    page.number("ureterocele_diameter"+ u,"Measured diameter of ureterocele (mm)",{min:0,suffix:"mm"})}
            page.output(html`<u><b>Ureter</b></u>`)
            page.enum("ureteral_dilatation" + u, "Ureteral dilatation, as evaluated by the physician",
                ["No", "Yes","Yes,all the way through","Yes,in its abdominal portion","Yes, in its pelvic portion", "NA"])
            page.number("diameter_of_retrovesical_ureter" + u, "Maximal measured diameter of the retrovesical ureter (mm)",{min:0,suffix:"mm"})
            page.number("diameter_of_adbominal_ureter" + u, "Maximal measured diameter of the abdominal ureter (mm)",{min:0,suffix:"mm"})
            page.enum("ureter_wall" + u, "Presence of a thickened ureter",
                ["Normal", "Thickened", "Unknown", "NA"])
    })
    }
})
// Urinary lower tract results

page.section("Urinary lower tract", () => { 
   page.enum("baldder_filling","Appearance of bladder filling",["empty", "partially filled", "Full", "Unknown", "NA"])
   page.enum("diversion","Presence of a urinary diversion in the described urinary tract",["No", "vesical probe", "cystostomy", "NA"])
   page.output(html`<u><b>Bladder wall</b></u>`)
   page.enum("bladder_wall","Description of bladder wall",["Normal", "Thickened", "Trabeculation", "Diverticular", "Unknown", "NA"])
   if (page.value("bladder_wall") == ["Thickened"]) {
       page.enum("location_of_the_bladder_wall_defect","Location of the bladder wall defect",["Diffuse", "Focal", "Unknown", "NA"])}
   if (page.value("bladder_wall") == ["Trabeculation"]) {
       page.enum("location_of_the_bladder_wall_defect","Location of the bladder wall defect",["Diffuse", "Focal", "Unknown", "NA"])}
   if (page.value("bladder_wall") == ["Diverticular"]) {
       page.enum("location_of_the_bladder_wall_defect","Location of the bladder wall defect",["Diffuse", "Focal", "Unknown", "NA"])}
    page.number("bladder_wall_thickness","Measurement of bladder wall in mm",{min:0,suffix:"mm"})
    page.output(html`<u><b>Volume</b></u>`)
    page.number("initial_bladder_volume","Initial bladder volume in ml",{min:0, suffix: "ml"})
    page.number("post_void_residual_Bladder_Volume","Post void residual volume in ml",{min:0, suffix: "ml"})
    page.output(html`<u><b>Urethra</b></u>`)
    page.enum("dilated_posterior_urethra","Urethra dilatation, as evaluated by the physician",["No", "Yes", "Unknown", "NA"])
    
})

// Lithiasis

page.section("Lithiasis", () => { 

    page.enum(
        "lithiasis",
        "Presence of urolithiasis in the bladder",
        ["No", "Yes", "NA"])
    if (page.value("lithiasis") == "Yes") {
    page.textArea("lithiasis_comment", "Comment on lithiasis")}
})

// Conclusion

page.section("Conclusion", () => {
    page.textArea("conclusion", "Conclusion")
    page.text("comment", "Free text for manually added results, or comment")
    page.binary("*conclusion_validation", "Conclusion Validation", {help:"The physician must validate the automatically generated conclusion, after manual modification if required"})
})
