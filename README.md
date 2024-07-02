# DoToDo
To Do app TOP
the layout is going to be GRID

TOPBAR | TOPBAR | TOPBAR | TOPBAR
book   | todo   | todo   | setting
book   | todo   | todo   | setting
bottom | bottom | bottom | bottom 



In case I hover one of the book's it should become

TOPBAR | TOPBAR | TOPBAR | TOPBAR
book   | book   | todo   | setting
book   | book   | todo   | setting
bottom | bottom | bottom | bottom 


todo's should br objects dynamically created using factorie or class( I can look back at bookProject for this

book {name,start date, deadline, number of items to do, children}

todo {name, start date, deadline, notes, parent, priority(background color)}


I should makae sure that everything i want to save later ot that is created by the user is saved in objects so it's later more easily saved through JSON & web storage api