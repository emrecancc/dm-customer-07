import re


def process_file(filepath):
    """Process a file containing lines of the form key=value.

    Returns a dictionary mapping keys to integer values.
    """
    result = {}
    with open(filepath, 'r') as f:
        for line in f:
            m = re.match(r'(\w+)=(\d+)', line)
            if m:
                key, value = m.group(1), int(m.group(2))
                result[key] = value
    return result
