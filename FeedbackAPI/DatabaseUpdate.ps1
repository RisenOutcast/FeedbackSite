$databaseConnectionString = "Server=.\\sqlexpress; Initial Catalog=feedbank; trusted_connection=true; encrypt=false;"

# Test database connection
Write-Host "Running connection test..."
$testConnectionCommand = "dotnet ef dbcontext info -- --connection ""$databaseConnectionString"""
Invoke-Expression $testConnectionCommand

if ($LASTEXITCODE -eq 0) {
    Write-Host "Development database connection test successful."
} else {
    Write-Host "Development database connection test failed."
    Read-Host -Prompt "Press Enter to exit..."
    Exit
}

# Run database update command
Write-Host "Running database update..."
$databaseUpdateCommand = "dotnet ef database update"
Invoke-Expression $databaseUpdateCommand

# Check if the database update was successful
if ($LASTEXITCODE -eq 0) {
    Write-Host "Development database update completed successfully."
} else {
    Write-Host "Development database update failed."
    Read-Host -Prompt "Press Enter to exit..."
    Exit
}

Read-Host -Prompt "Press Enter to exit..."