class Node:
    def __init__(self, val=None):
        ''' Inicializador '''
        self.val = val
        self.next = None
        self.prev = None

    def __str__(self) -> str:
        return f'Nodo con valor {self.val}\nAnterior {self.prev.val if self.prev else None}\nSiguiente {self.next.val if self.next else None}'
