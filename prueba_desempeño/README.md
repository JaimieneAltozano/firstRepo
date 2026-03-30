# Register Students

A little system that let it manage the basic info about students.

## Description

1. **Register students** 
2. **Find student** 
3. **Upload info student** 
4. **Delete student**

## Features

- U must register a student before
- U can see the students list that u registered
- U can find a student throught the ID
- U can upload all the information about the student.
Yes, you must upload **all** the info
- And u can delete the student

## Usage

Choose one of the menu options and follow the instructions.  
First, you need to register one or students.

## Example

Menu:
1. Exit
2. Student register
3. Find student
4. Show student list

If the student is register and if u want to upload or delete... u must choose the option 3

Option: 2
Quantity students: 1
Name student: pio
ID student: 1
Age student: 12
Program: math
Statement student (active/inactive): active
Show the register?
1. Yes
2. No
2

Menu:
1. Exit
2. Student register
3. Find student
4. Show student list

If the student is register and if u want to upload or delete... u must choose the option 3

Option: 3
Enter ID student: 1
This is the student: {'Name': 'pio', 'ID': '1', 'Age': '12', 'Program': 'math', 'Statement': 'active'}
1. Upload
2. Delete: 1
Name student: pato
ID student: 2
Age student: 13
Program: Math
Statement (active/inactive): inactive
Show?
1. Yes
2. No: 2

Menu:
1. Exit
2. Student register
3. Find student
4. Show student list

If the student is register and if u want to upload or delete... u must choose the option 3

Option: 2
Quantity students: 1
Name student: Mari
ID student: 3
Age student: 14
Program: biology
Statement student (active/inactive): active
Show the register?
1. Yes
2. No
2

Menu:
1. Exit
2. Student register
3. Find student
4. Show student list

If the student is register and if u want to upload or delete... u must choose the option 3

Option: 3
Enter ID student: 2
This is the student: {'Name': 'pato', 'ID': '2', 'Age': '13', 'Program': 'Math', 'Statement': 'inactive'}
1. Upload
2. Delete: 2
{'Name': 'pato', 'ID': '2', 'Age': '13', 'Program': 'Math', 'Statement': 'inactive'} has been deleted

Menu:
1. Exit
2. Student register
3. Find student
4. Show student list

If the student is register and if u want to upload or delete... u must choose the option 3

Option: 4
[{}, {'Name': 'Mari', 'ID': '3', 'Age': '14', 'Program': 'biology', 'Statement': 'active'}]

Menu:
1. Exit
2. Student register
3. Find student
4. Show student list

If the student is register and if u want to upload or delete... u must choose the option 3

Option: 1
See yaa

## Additional Info

The program repeats until the user choose to exit, and this program only uses dictionaries inside lists.

## Author
Engineer Violy De La Rosa