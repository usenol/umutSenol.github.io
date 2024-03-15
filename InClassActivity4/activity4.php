<!DOCTYPE html>

<html lang="en">
<head>
    <title>Java Jam Coffee House</title>
    <meta name="description" content="CENG 311 Inclass Activity 4" />

</head>

<body>

	<form action = "activity4.php" method="GET">
		<table>
			<tr>
				<td>
					From:
				</td>
				<td>
					<input type="text" name="from"/>
				</td>
				<td>
					Currency:
				</td>
				<td>
					<select name="currency-from">
                        <option value="USD">US Dollar</option>
                        <option value="CAD">Canadian Dollar</option>
                        <option value="EUR">Euro</option>
                    </select>
				</td>	
			</tr>
			<tr>
				<td>
					To:
				</td>
				<td>
					<input type="text" name="value"/>
				</td>
				<td>
					Currency:
				</td>
				<td>
					<select name="currency-to">
                        <option value="USD">US Dollar</option>
                        <option value="CAD">Canadian Dollar</option>
                        <option value="EUR">Euro</option>
                    </select>
				</td>	
			</tr>
				<tr>
				<td>
					
				</td>
				<td>
					
				</td>
				<td>
					
				</td>
				<td>
					<input type="submit" value="convert"/>
				</td>	
			</tr>
		</table>
		
	</form>		


	<!-- I created php part to get and calculate values -->
    <?php
    $amount = $_POST['from'];
    $from = $_POST['currency-from'];
    $to = $_POST['currency-to'];

    //We can change money value in here
    $rates = array(
        "USDCAD" => 1.35,
        "USDEUR" => 0.92,
        "CADEUR" => 0.68,
        "CADUSD" => 0.74,
        "EURUSD" => 1.09,
        "EURCAD" => 1.47,
        "USDUSD" => 1,
        "EUREUR" => 1,
        "CADCAD" => 1
    );

    //We checked values and calculate the result
    if (array_key_exists($from . $to, $rates)) {
        $exchangeRate = $rates[$from . $to];
        $result = $amount * $exchangeRate;
        //To get more detailed result we can increase 2nd variable of number_format function 
        echo '<script>document.getElementsByName("currency-from")[0].value = "' . $from . '";</script>';
        echo '<script>document.getElementsByName("currency-to")[0].value = "' . $to . '";</script>';
        echo '<script>document.getElementsByName("from")[0].value = "' . number_format($amount, 2) . '";</script>';
        echo '<script>document.getElementsByName("to")[0].value = "' . number_format($result, 2) . '";</script>';
        
        //We give the exchange rate to currencies
        echo "<p>Exchange rate: 1 $from = $exchangeRate $to</p>";
        
    }
    else{
        echo "Something going wrong!!!";
    }
    ?>
</body>
</html>