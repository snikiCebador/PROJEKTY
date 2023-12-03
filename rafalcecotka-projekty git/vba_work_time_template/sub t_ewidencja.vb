sub t_ewidencja

oSheet = ThisComponent.Sheets.getByName("wzór")
liczba_pracownikow = oSheet.getCellRangeByName("M4").Value
liczba_dni = oSheet.getCellRangeByName("M3").Value


For i = 2 To 2 + (liczba_pracownikow - 1)
	pracownik_nazwa = oSheet.getCellRangeByName("P" & i).String
	pracownik_godziny = oSheet.getCellRangeByName("Q" & i).Value
	miesiac_nazwa = oSheet.getCellRangeByName("M5").String
	rok_nazwa = oSheet.getCellRangeByName("M2").String
	text_4 = "Nazwisko i imię Zleceniobiorcy: "&pracownik_nazwa
	text_3 = "Miesiąc: " & miesiac_nazwa & " " & rok_nazwa & " r."
	Print "Wydruk dla " & pracownik_nazwa & " godziny do rozdzielenia " & pracownik_godziny
	oSheet.getCellRangeByName("A4").String = text_4
	oSheet.getCellRangeByName("A3").String = text_3
	del_godziny
	Do While pracownik_godziny > 0
	
		For dni = 8 To (8 + liczba_dni) - 1 
		
			If pracownik_godziny > 0 Then
				If oSheet.getCellRangeByName("M" & dni).Value = 0 Then
					oSheet.getCellRangeByName("D" & dni).Value = oSheet.getCellRangeByName("D" & dni).Value + 1
					pracownik_godziny = pracownik_godziny - 1
					
				End If
				
			End If
			
		Next dni
	Loop
	def_drukowanie
		
Next i

end sub

sub def_drukowanie
rem ----------------------------------------------------------------------
rem define variables
dim document   as object
dim dispatcher as object
rem ----------------------------------------------------------------------
rem get access to the document
document   = ThisComponent.CurrentController.Frame
dispatcher = createUnoService("com.sun.star.frame.DispatchHelper")

rem ----------------------------------------------------------------------
dispatcher.executeDispatch(document, ".uno:Print", "", 0, Array())


end sub