import { cn } from '../../utils/cn';

const ProjectExternalButton = ({ className, children, ...rest }) => {
  return (
    <button className={cn('flex gap-1.5 items-center', className)} {...rest}>
      {children}
    </button>
  );
};

const externals = {
  web: { icon: '', label: 'Website' },
  github: { icon: '', label: 'GitHub' },
  dribbble: { icon: '', label: 'Dribbble' },
};

ProjectExternalButton.Icon = ({ variant, className }) => {
  const IconComponent = externals[variant]?.icon;
  return <IconComponent className={className} />;
};

ProjectExternalButton.Text = ({ children, className }) => {
  const label = Object.keys(externals).some((e) => e === children.toString())
    ? externals[children]?.label
    : children;
  return <span className={className}>{label}</span>;
};

export { ProjectExternalButton };
