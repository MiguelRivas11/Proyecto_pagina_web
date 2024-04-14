from Nodes import Node
class DoubleLinkedList:
    def __init__(self) -> None:
        ''' Inicializador '''  
        self.counter = 0
        self.head = None
        self.tail = None

    def isEmpty(self) -> bool:
        ''' Mostrar si la lista está vacía '''
        return self.counter == 0

    def headInsert(self, val) -> None:
        ''' Insertar elemento al inicio de la lista '''
        new_node = Node(val)
        if self.isEmpty():
            self.head = self.tail = new_node
        else:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node
        self.counter += 1

    def insertBetween(self, prev_val, val) -> None:
        ''' Insertar elemento entre dos nodos '''
        if self.isEmpty():
            print("La lista está vacía, no se puede insertar entre nodos.")
            return
        current = self.head
        while current:
            if current.val == prev_val:
                new_node = Node(val)
                new_node.next = current.next
                if current.next:
                    current.next.prev = new_node
                current.next = new_node
                new_node.prev = current
                self.counter += 1
                return
            current = current.next
        print(f"No se encontró el nodo con el valor {prev_val}")

    def tailInsert(self, val) -> None:
        ''' Insertar elemento al final de la lista '''
        new_node = Node(val)
        if self.isEmpty():
            self.head = self.tail = new_node
        else:
            new_node.prev = self.tail
            self.tail.next = new_node
            self.tail = new_node
        self.counter += 1

    def headDelete(self) -> None:
        ''' Eliminar el primer elemento de la lista '''
        if self.isEmpty():
            print("La lista está vacía, no se puede eliminar ningún elemento.")
            return
        if self.head == self.tail:
            self.head = self.tail = None
        else:
            self.head = self.head.next
            self.head.prev = None
        self.counter -= 1

    def tailDelete(self) -> None:
        ''' Eliminar el último elemento de la lista '''
        if self.isEmpty():
            print("La lista está vacía, no se puede eliminar ningún elemento.")
            return
        if self.head == self.tail:
            self.head = self.tail = None
        else:
            self.tail = self.tail.prev
            self.tail.next = None
        self.counter -= 1

    def deleteBetween(self, val) -> None:
        ''' Eliminar elemento entre dos nodos '''
        if self.isEmpty():
            print("La lista está vacía, no se puede eliminar ningún elemento.")
            return
        current = self.head
        while current:
            if current.val == val:
                if current == self.head:
                    self.head = current.next
                    if self.head:
                        self.head.prev = None
                elif current == self.tail:
                    self.tail = current.prev
                    self.tail.next = None
                else:
                    current.prev.next = current.next
                    current.next.prev = current.prev
                self.counter -= 1
                return
            current = current.next
        print(f"No se encontró el nodo con el valor {val}")

    def traverse(self) -> None:
        ''' Recorrer la lista (imprimir) '''
        current = self.head
        while current:
            print(current.val, end=" ")
            current = current.next
        print()

if __name__ == '__main__':
    lista_doblemente_ligada = DoubleLinkedList()

    lista_tradicional = [1, 2, -212, True, 'UNE', 3]

    # Llenado de la lista
    for item in lista_tradicional:
        lista_doblemente_ligada.tailInsert(item)

    # Impresión de la lista
    print('Impresión #1 -> Llenado de lista')
    lista_doblemente_ligada.traverse()

    # Adición de un nuevo elemento al final
    print(' Nuevo elemento al final')
    lista_doblemente_ligada.tailInsert(False)
    lista_doblemente_ligada.traverse()

    # Adición de un nuevo elemento al inicio
    print(' Nuevo elemento al inicio')
    lista_doblemente_ligada.headInsert('Estructuras')
    lista_doblemente_ligada.traverse()

    # Adición de elemento entre dos nodos
    print(' Nuevo elemento entre dos nodos')
    lista_doblemente_ligada.insertBetween(True, False)
    lista_doblemente_ligada.traverse()

    # Eliminación del primer elemento e impresión
    print(' Eliminación del primer elemento')
    lista_doblemente_ligada.headDelete()
    lista_doblemente_ligada.traverse()

    # Eliminación del último elemento e impresión
    print(' Eliminación del último elemento')
    lista_doblemente_ligada.tailDelete()
    lista_doblemente_ligada.traverse()

    # Eliminación de un elemento en la lista e impresión
    print(' Eliminación de elemento en la lista')
    lista_doblemente_ligada.deleteBetween(3)
    lista_doblemente_ligada.traverse()
