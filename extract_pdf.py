import pdfplumber
with pdfplumber.open("Omansh Srivastava_Btech Civil.pdf") as pdf:
    for page in pdf.pages:
        print(page.extract_text())
