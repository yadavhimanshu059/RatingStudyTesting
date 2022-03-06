def mult(l):
    prod=1
    for i in l:
        prod=prod*i
    return prod
f1 = open("spec.txt", "r",encoding='utf8')
ar=f1.readlines()
f1.close()
experiment_ids=[]
number_of_items=[]
number_of_conditions=[]
i=0
while(ar[i][0]=="E"):
    temp=ar[i].split(" ")
    experiment_ids.append(int(temp[1]))
    number_of_items.append(int(temp[2]))
    number_of_conditions.append(int(temp[3]))
    i=i+1
temp=ar[i].split(" ")
#print(experiment_ids,number_of_items,number_of_conditions)
number_of_fillers = int(temp[1])
i=i+1
tempp=ar[i].split(" ")
#print(experiment_ids,number_of_items,number_of_conditions)
number_of_pracitem = int(tempp[1])
i+=1
tempp=ar[i].split(" ")
#print(experiment_ids,number_of_items,number_of_conditions)
number_of_non_words = int(tempp[1])
i+=1
stimulus_duration = int(ar[i]);
f3 =open("specs_lexical_decision.js","w",encoding='utf8')
f3.write("var number_of_items = " + str(number_of_items) + ";\n")
f3.write("var number_of_fillers = " + str(number_of_fillers) + ";\n")
f3.write("var number_of_pracitem = " + str(number_of_pracitem) + ";\n")
f3.write("var number_of_non_words = " + str(number_of_non_words) + ";\n")
f3.write("var number_of_lists = " + str(max(number_of_conditions)) + ";\n")
f3.write("var trial_dur = " + str(stimulus_duration) + ";\n")
f3.write("var trial_dur_2 = " + str(int(ar[i+1])) + ";\n")
f3.write("var trial_dur_3 = " + str(int(ar[i+2])) + ";\n")
f3.write("var choiceofe = " + str(int(ar[i+3])) + ";\n")
f3.write("var list_number = 0" +  ";\n")
f3.write("var font_size = " + str(int(ar[i+4])) + ";\n")
f3.write("var color = " + ar[i+5][:-1] + ";\n")
f3.close()
alllists=[]
with open("lists.txt", "r",encoding='utf8') as input:
    temp1=[]
    element=input.read().split("\n\n")
for item1 in element:
    temp2=[]
    item1=item1.split("\n")
    for item in item1:
        item=item.split("\t\t\t")
        temp2.append(item)
    temp1.append(temp2[0])
alllists=temp1

print(str(alllists)+"\n\n")

##alllistsn = []
##
##for i in range(max(number_of_conditions)):
##        temp=[]
##        for j in range(len(number_of_items)):
##            for k in range(number_of_items[j]):
##                alllists[j][k][(k+i+experiment_ids[j]-1)%number_of_conditions[j]].append(str(j+1))
##                alllists[j][k][(k+i+experiment_ids[j]-1)%number_of_conditions[j]].append(str(k+1))
##                alllists[j][k][(k+i+experiment_ids[j]-1)%number_of_conditions[j]].append(chr(97+(k+i)%number_of_conditions[j]))
##                temp.append(alllists[j][k][(k+i)%number_of_conditions[j]])
##        alllistsn.append(temp)
##
##print(alllistsn)

if(number_of_fillers!= 0):
    with open("fillers.txt", "r",encoding='utf8') as input:
        allfillers = input.read().split("\n")
    all_fillers=[]
    for list in alllistsn:
        count=0
        for j in range (number_of_fillers):
            filler =allfillers[j]
            count=count+1;
            filler=filler.split("\t")
            fillitem=[]
            for fillelm in filler:
                fillelm=fillelm.split("    ")
                for itemm in fillelm:
                    fillitem.append(itemm)
            fillitem.append('-1')
            fillitem.append(str(count))
            fillitem.append('F')
            list.append(fillitem)
            all_fillers.append(fillitem)
if(number_of_non_words!= 0):
    with open("nonword.txt", "r",encoding='utf8') as input:
        allnonwords = input.read().split("\n")
    all_nonwords=[]
    for list in alllistsn:
        count=0
        for j in range (number_of_non_words):
            nonword =allnonwords[j]
            count=count+1;
            nonword=nonword.split("\t")
            nonitem=[]
            for nonelm in nonword:
                nonelm=nonelm.split("    ")
                for itemmm in nonelm:
                    nonitem.append(itemmm)
            nonitem.append('-1')
            nonitem.append(str(count))
            nonitem.append('NW')
            list.append(nonitem)
            all_nonwords.append(nonitem)


if(number_of_pracitem!= 0):
    with open("practice.txt", "r",encoding='utf8') as input:
        allprac = input.read().split("\n\n")
    all_prac=[]
    count=0
    for i in range (number_of_pracitem):
        count+=1
        pracit=allprac[i].split("\t\t\t")
        practitem=[]
        for pracite in pracit:
            pracite=pracite.split("    ")
            for ite in pracite:
                practitem.append(ite)
        practitem.append('-1')
        practitem.append(str(count))
        practitem.append('P')
        all_prac.append(practitem)


f4 = open("lists_lexical_decision.js","w",encoding="utf-8")
f4.write("var lists =")
f4.write(str(alllists))
f4.write(";\n")
f4.write("var praclist =")
f4.write(str(all_prac))
f4.write(";\n")
f4.close()
