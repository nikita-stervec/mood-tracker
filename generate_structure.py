import os

def generate_tree(directory, indent=''):
    tree = []
    for item in os.listdir(directory):
        if item == 'node_modules':
            continue
        
        full_path = os.path.join(directory, item)
        if os.path.isdir(full_path):
            tree.append(f"{indent}- `{item}/`")
            tree.extend(generate_tree(full_path, indent + '  '))
        else:
            tree.append(f"{indent}- `{item}`")
    return tree

project_directory = '.'  # Укажите путь к вашей директории
tree = generate_tree(project_directory)
with open('project_structure.md', 'w') as f:
    f.write("# Структура проекта\n\n")
    f.write("\n".join(tree))
