---
title: "Code Block Enhancement Feature Test"
date: 2024-01-25
venue: "Test"
keywords: ["Code Highlighting", "Copy Function", "Theme Switching"]
---

**Author**: **Jane Doe**

This page is for testing the new features of the code block:
- Dark/light mode adaptation
- Automatic text wrapping
- Copy button

## Python Code - Long Line Test

```python
def very_long_function_name_to_test_text_wrapping_functionality(parameter_one, parameter_two, parameter_three, parameter_four, parameter_five):
    """
    This is a very long function name to test the text wrapping functionality of the code block.
    When the code line is too long, it should be able to wrap automatically instead of generating a horizontal scroll bar.
    """
    very_long_variable_name_that_should_wrap = "This is a very long string to test the wrapping behavior of the code block when encountering long text, and it should be able to correctly handle the mixed situation of Chinese and English"
    
    result = some_very_long_function_call_that_exceeds_normal_line_length(very_long_variable_name_that_should_wrap, parameter_one, parameter_two)
    
    return result

# Test various syntax highlighting
class DataProcessor:
    def __init__(self, data_source="default", max_iterations=1000, learning_rate=0.001):
        self.data_source = data_source  # Data source configuration
        self.max_iterations = max_iterations
        self.learning_rate = learning_rate
        
    def process_data_with_very_long_method_name_for_testing_purposes(self):
        for i in range(self.max_iterations):
            print(f"Processing iteration {i} with learning rate {self.learning_rate} on data from {self.data_source}")
```

## JavaScript Code - Complex Example

```javascript
// This is a JavaScript example to test syntax highlighting in dark and light modes
const createComplexDataVisualizationComponentWithManyProps = ({ 
    dataSource, 
    chartType = 'line', 
    colorScheme = 'default', 
    animationDuration = 300,
    responsiveBreakpoints = { mobile: 768, tablet: 1024, desktop: 1200 }
}) => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [processedData, setProcessedData] = useState([]);
    const [errorMessage, setErrorMessage] = useState("This is a very long error message to test how the code block handles the display and wrapping of long text content");
    
    useEffect(() => {
        const fetchAndProcessDataFromRemoteApiWithRetryLogic = async () => {
            try {
                const response = await fetch(`https://api.example.com/very/long/endpoint/path/that/might/cause/horizontal/scrolling/issues?param1=value1&param2=value2&param3=value3`);
                const rawData = await response.json();
                
                // Complex logic for processing data
                const transformedData = rawData.map(item => ({
                    ...item,
                    displayName: `${item.firstName} ${item.lastName} - ${item.department} (${item.employee_id})`,
                    fullAddress: `${item.address.street} ${item.address.number}, ${item.address.city}, ${item.address.country} ${item.address.postalCode}`
                }));
                
                setProcessedData(transformedData);
            } catch (error) {
                console.error('Data acquisition failed:', error.message);
                setErrorMessage(`An error occurred while fetching data: ${error.message} - Please check your network connection and try again`);
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchAndProcessDataFromRemoteApiWithRetryLogic();
    }, [dataSource]);
    
    return (
        <div className="complex-visualization-container">
            {isLoading && <LoadingSpinner message="Loading data, please wait..." />}
            {errorMessage && <ErrorDisplay message={errorMessage} />}
            {processedData.length > 0 && <Chart data={processedData} config={chartType} />}
        </div>
    );
};
```

## Bash Script - System Management


```bash
#!/bin/bash

# This is a complex system management script to test code highlighting and wrapping functions
SCRIPT_NAME="complex_system_management_script_with_very_long_name_for_testing_purposes.sh"
LOG_FILE="/var/log/system_management_$(date +%Y%m%d_%H%M%S)_detailed_log_with_timestamp.log"
CONFIG_FILE="/etc/system_config/application_settings_production_environment.conf"

function perform_system_backup_with_compression_and_remote_sync() {
    local backup_source_directory="$1"
    local backup_destination_with_timestamp="/backup/$(date +%Y%m%d_%H%M%S)_system_backup_compressed"
    local remote_backup_server="backup-server.company.com:/remote/backup/location/with/deep/directory/structure"
    
    echo "Start system backup operation - Source directory: $backup_source_directory"
    echo "Backup target: $backup_destination_with_timestamp"
    echo "Remote sync server: $remote_backup_server"
    
    # Create compressed backup
    tar -czf "${backup_destination_with_timestamp}.tar.gz" \
        --exclude="*.tmp" \
        --exclude="*.log" \
        --exclude="cache/*" \
        --exclude="temp/*" \
        "$backup_source_directory" 2>&1 | tee -a "$LOG_FILE"
    
    if [ ${PIPESTATUS[0]} -eq 0 ]; then
        echo "Local backup created successfully: ${backup_destination_with_timestamp}.tar.gz" | tee -a "$LOG_FILE"
        
        # Sync to remote server
        rsync -avz --progress --stats "${backup_destination_with_timestamp}.tar.gz" "$remote_backup_server" 2>&1 | tee -a "$LOG_FILE"
        
        if [ $? -eq 0 ]; then
            echo "Remote sync completed successfully" | tee -a "$LOG_FILE"
        else
            echo "Warning: Remote sync failed, backup is only saved locally" | tee -a "$LOG_FILE"
        fi
    else
        echo "Error: Local backup creation failed, please check disk space and permissions" | tee -a "$LOG_FILE"
        exit 1
    fi
}

# Execute backup operation
perform_system_backup_with_compression_and_remote_sync "/var/www/html/application_with_very_long_directory_name"
```

## SQL Query - Database Operations

```sql
-- Complex SQL query to test syntax highlighting and long line wrapping
SELECT 
    u.user_id,
    u.username,
    u.email_address,
    u.full_name AS user_display_name,
    p.profile_picture_url,
    p.bio_description,
    COUNT(DISTINCT o.order_id) AS total_orders_count,
    SUM(oi.quantity * oi.unit_price) AS total_order_value,
    AVG(r.rating_score) AS average_customer_rating,
    MAX(o.order_date) AS last_order_date,
    STRING_AGG(DISTINCT c.category_name, ', ' ORDER BY c.category_name) AS purchased_categories
FROM 
    users u
    LEFT JOIN user_profiles p ON u.user_id = p.user_id
    LEFT JOIN orders o ON u.user_id = o.customer_user_id
    LEFT JOIN order_items oi ON o.order_id = oi.order_id
    LEFT JOIN products prod ON oi.product_id = prod.product_id
    LEFT JOIN product_categories pc ON prod.product_id = pc.product_id
    LEFT JOIN categories c ON pc.category_id = c.category_id
    LEFT JOIN product_reviews r ON prod.product_id = r.product_id AND r.reviewer_user_id = u.user_id
WHERE 
    u.account_status = 'active'
    AND u.registration_date >= '2023-01-01'
    AND (o.order_status IN ('completed', 'delivered') OR o.order_status IS NULL)
    AND u.email_address NOT LIKE '%+test%@%'
GROUP BY 
    u.user_id, u.username, u.email_address, u.full_name, p.profile_picture_url, p.bio_description
HAVING 
    COUNT(DISTINCT o.order_id) >= 1 OR COUNT(DISTINCT o.order_id) = 0
ORDER BY 
    total_order_value DESC NULLS LAST,
    average_customer_rating DESC NULLS LAST,
    u.username ASC;
```

### Test Instructions

1. **Hover Copy Button**: Hovering the mouse over the code block should reveal the "Copy" button in the upper right corner
2. **Theme Switching**: When switching between dark/light mode, the code highlight color should change accordingly
3. **Text Wrapping**: Long lines of code should wrap automatically instead of creating a horizontal scroll bar
4. **Multi-language Support**: Different programming languages should have corresponding syntax highlighting

After clicking the copy button, the button text should change to "Copied!", then back to "Copy".
