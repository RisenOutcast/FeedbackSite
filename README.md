# FeedbackSite

## How to run?
### API
Runnable standalone (Does not require .NET 6 installation!) executable can be downloaded **[here](https://github.com/RisenOutcast/FeedbackSite/releases)**, run the .exe and close with Ctrl+C.
Otherwise, you can build it yourself using Visual Studio or .NET CLI

### Frontend
Lorem ipsum

## API Guide
### Prerequisite
 1. If you are **not** using the standalone executable: Have .NET 6 installed.

 1. Have a Microsoft SQL Server installed. I used Microsoft SQL Server 2022 Express, which can be downloaded [here](https://www.microsoft.com/en-us/sql-server/sql-server-downloads).

 1. Create a database called `Feedbank` in the SQL server and see that the connection string in `appsettings.json` is correct for you, in case you have set a custom name and/or login credentials for your SQL server, include them as well.

 1. Update the database for this project with Entity Framework. You can run the included Powershell script to do this, note that you need to edit the connection string in the scripts as well to match your SQL server. Or you can run the commands yourself info on it can be found [here](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli).

### Endpoints:

`/Feedback`

Returns the feedbacks from the database

You can use the parameters `?limit` and `?offset` to set the amount and starting point.
By default, the limit is 25 and the offset is 0.

`/Feedback/{id}`

Returns the feedback with the specified ID.

Example of the data you'll receive:
```
{
  "id": 6,
  "created": "2023-12-20T00:53:21.8292779",
  "name": "Testinen",
  "email": "testi.testinen@testi.com",
  "score": 5,
  "message": "This is testi"
}
```

### Posting new data:

New data can be added by POST to the `/Feedback`

Example of the data:
```
{
  "name": "Testinen",
  "email": "testi.testinen@testi.com",
  "score": 5,
  "message": "This is testi"
}
```

### Deleting data:

by DELETE to the `/Feedback/{id}` which deletes the feedback with the specified id.

## Azure
### How would I host this project in Azure?