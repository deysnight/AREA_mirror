using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SQLite;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace area_server
{
    public class DBConnect
    {
        protected static readonly string database = Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot\" + "database\\area_base.db");

        public static Object my_select(string table, string value)
        {
            Object json;
            using (var connection = new SQLiteConnection("" + new SQLiteConnectionStringBuilder { DataSource = database }))
            {
                connection.Open();
                using (var transaction = connection.BeginTransaction())
                {
                    var selectCommand = connection.CreateCommand();
                    selectCommand.Transaction = transaction;
                    selectCommand.CommandText = "SELECT " + value + " FROM " + table; /// QUERY HERE
                    using (var reader = selectCommand.ExecuteReader())
                    {
                        var items = new List<Dictionary<string, object>>();
                        while (reader.Read())
                        {
                            /*var item = new Dictionary<string, object>(reader.FieldCount - 1);
                            for (var i = 1; i < reader.FieldCount; i++)
                            {
                                item[reader.GetName(i)] = reader.GetValue(i);
                            }
                            items[reader.GetValue(0)] = item;*/


                            var item = new Dictionary<string, object>(reader.FieldCount - 1);
                            for (var i = 0; i < reader.FieldCount; i++)
                            {
                                item[reader.GetName(i)] = reader.GetValue(i);
                            }
                            items.Add(item);
                        }
                        var jsonstr = JsonConvert.SerializeObject(items, Formatting.Indented);
                        json = JsonConvert.DeserializeObject(jsonstr);
                    }
                    transaction.Commit();
                }
            }
            return (json);
        }

        public static Object my_select(string table, string value, string order)
        {
            Object json;
            using (var connection = new SQLiteConnection("" + new SQLiteConnectionStringBuilder { DataSource = database }))
            {
                connection.Open();
                using (var transaction = connection.BeginTransaction())
                {
                    var selectCommand = connection.CreateCommand();
                    selectCommand.Transaction = transaction;
                    selectCommand.CommandText = "SELECT " + value + " FROM " + table + " ORDER BY " + order; /// QUERY HERE
                    using (var reader = selectCommand.ExecuteReader())
                    {
                        var items = new List<Dictionary<string, object>>();
                        while (reader.Read())
                        {
                            var item = new Dictionary<string, object>(reader.FieldCount - 1);
                            for (var i = 0; i < reader.FieldCount; i++)
                            {
                                item[reader.GetName(i)] = reader.GetValue(i);
                            }
                            items.Add(item);
                        }
                        var jsonstr = JsonConvert.SerializeObject(items, Formatting.Indented);
                        json = JsonConvert.DeserializeObject(jsonstr);
                    }
                    transaction.Commit();
                }
            }
            return (json);
        }

        public static void my_insert(string table, string champs, string values)
        {
            using (var connection = new SQLiteConnection("" + new SQLiteConnectionStringBuilder { DataSource = database }))
            {
                connection.Open();
                using (var transaction = connection.BeginTransaction())
                {
                    var insertCommand = connection.CreateCommand();
                    insertCommand.Transaction = transaction;
                    insertCommand.CommandText = "INSERT INTO '" + table + "' (" + champs + ") VALUES (" + values + ");"; /// QUERY HERE
                    insertCommand.ExecuteNonQuery();
                    transaction.Commit();
                }
            }
        }

        public static int my_insert_return(string table, string champs, string values)
        {
            dynamic json;
            using (var connection = new SQLiteConnection("" + new SQLiteConnectionStringBuilder { DataSource = database }))
            {
                connection.Open();
                using (var transaction = connection.BeginTransaction())
                {
                    var insertCommand = connection.CreateCommand();
                    insertCommand.Transaction = transaction;
                    insertCommand.CommandText = "INSERT INTO '" + table + "' (" + champs + ") VALUES (" + values + ");"; /// QUERY HERE
                    insertCommand.ExecuteNonQuery();
                    insertCommand.CommandText = "SELECT last_insert_rowid();";
                    using (var reader = insertCommand.ExecuteReader())
                    {
                        var items = new List<Dictionary<string, object>>();
                        while (reader.Read())
                        {
                            var item = new Dictionary<string, object>(reader.FieldCount - 1);
                            for (var i = 0; i < reader.FieldCount; i++)
                            {
                                item[reader.GetName(i)] = reader.GetValue(i);
                            }
                            items.Add(item);
                        }
                        var jsonstr = JsonConvert.SerializeObject(items, Formatting.Indented);
                        json = JsonConvert.DeserializeObject(jsonstr);
                    }
                    transaction.Commit();
                }
            }
            if (json.Count == 0) return (-1);
            dynamic jjson = json[0];
            return (jjson["last_insert_rowid()"]);
        }

        public static void my_update(string table, string value, string condition)
        {
            using (var connection = new SQLiteConnection("" + new SQLiteConnectionStringBuilder { DataSource = database }))
            {
                connection.Open();
                using (var transaction = connection.BeginTransaction())
                {
                    var insertCommand = connection.CreateCommand();
                    insertCommand.Transaction = transaction;
                    insertCommand.CommandText = "UPDATE " + table + " SET " + value + " WHERE " + condition + ";"; /// QUERY HERE
                    insertCommand.ExecuteNonQuery();
                    transaction.Commit();
                }
            }
        }

        public static void my_delete(string table, string condition)
        {
            using (var connection = new SQLiteConnection("" + new SQLiteConnectionStringBuilder { DataSource = database }))
            {
                connection.Open();
                using (var transaction = connection.BeginTransaction())
                {
                    var insertCommand = connection.CreateCommand();
                    insertCommand.Transaction = transaction;
                    insertCommand.CommandText = "DELETE FROM " + table + " WHERE " + condition + ";"; /// QUERY HERE
                    insertCommand.ExecuteNonQuery();
                    transaction.Commit();
                }
            }
        }
    }
}
