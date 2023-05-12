import threading

balance = 1000 


lock = threading.Lock()

def pasaload(amount):
    global balance

   
    lock.acquire()

    try:
        
        balance += amount
        print("PASALOAD: It is Loaded! {} pesos. New Balance: {} pesos.".format(amount, balance))
    finally:
        
        lock.release()

def main():
    
    amounts = []
    while True:
        amount = input("Please enter the pasaload amount (Type 69 to exit): ")
        amount = int(amount)
        if amount == 69:
            break
        amounts.append(amount)

    
    threads = []
    for amount in amounts:
        thread = threading.Thread(target=pasaload, args=(amount,))
        threads.append(thread)
        thread.start()

    
    for thread in threads:
        thread.join()

    print("I repeat all pasaload are complete!.")

if __name__=='__main__':
    main()
