products = []
def inventary(product, price, stock):
    products.append({
        "Product" : product,
        "Price" : price,
        "Stock" : stock
    })

while True:
    option = input("\nMenu:\n1. Product register\n2. Total and costs\n")
    if option == "1":
        quantityProducts = int(input("How many products do 'u want to add?: "))
        for i in range(quantityProducts):
            product = input("Product name: ")
            price = float(input("Price: "))
            stock = int(input("Stock: "))
            inventary(product, price, stock)
    elif option == "2":
        total_value = 0
        for item in products:
            if not products:
                print("There's no items yet")
        else:
            for item in products:
                print(item)
                total_value += item["Price"] * item["Stock"]
                print(f"El costo total es: {total_value}")
    else:
        print("That option doesn't exist")