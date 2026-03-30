students = []
def student(info1, info2, info3, info4, info5):
    students.append({
        "Name": info1,
        "ID": info2,
        "Age": info3,
        "Program": info4,
        "Statement": info5,
    })
    
options = "a"
while options != "1":
    print("\nMenu:\n1. Exit\n2. Student register\n3. Find student\n4. Show student list\n")
    print("If the student is register and if u want to upload or delete... u must choose the option 3")
    options = input("\nOption: ")

    if options == "1":
        print("See yaa")
        break

    if options == "2":
        quantity = int(input("Quantity students: "))
        for i in range(quantity):
            name_student = input("Name student: ")
            id_student = input("ID student: ")
            age_student = input("Age student: ")
            program = input("Program: ")
            statement = input("Statement student (active/inactive): ")
            student(name_student, id_student, age_student, program, statement)

        choose = input("Show the register?\n1. Yes\n2. No\n")
        if choose == "1":
            print(students)
        elif choose == "2":
            continue
        else: 
            print("That option doesn't exist")

    elif options == "3":
        finderStudent = input("Enter ID student: ")
        found = False
        for i in students:
            if i["ID"] == finderStudent:
                found = True
                print(f"This is the student: {i}")
                choose = input("1. Upload\n2. Delete\n3. Menu\n")
                if choose == "1":
                    for j in students:
                        info1 = input("Name student: ")
                        info2 = input("ID student: ")
                        info3 = input("Age student: ")
                        info4 = input("Program: ")
                        info5 = input("Statement (active/inactive): ")
                        i.update({
                            "Name" : info1,
                            "ID": info2,
                            "Age": info3,
                            "Program": info4,
                            "Statement": info5, 
                            })
                    choose = input("Show?\n1. Yes\n2. No\n")
                    if choose == "1":
                        print(i)
                    elif choose == "2":
                        continue
                    else:
                        print("Hey loco, qué pazza valemía, ombee")
                elif choose == "2":
                    print(f"{i} has been deleted")
                    i.clear()
                elif choose == "3":
                    continue
                else:
                    print("That option doesn't exist")
        if not found:
            print("Not found")
    
    elif options == "4":
        print(students)

    else:
        print("That option doesn't exist")