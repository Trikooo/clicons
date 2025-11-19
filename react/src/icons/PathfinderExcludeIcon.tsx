import React from 'react';
import config from '../config';

interface PathfinderExcludeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PathfinderExcludeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pathfinder-exclude)
 * @see {@link https://clicons.dev/icon/pathfinder-exclude}
 */
const PathfinderExcludeIcon = React.forwardRef<SVGSVGElement, PathfinderExcludeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9.49915 10.7141C9.57432 10.5723 9.6607 10.4402 9.75998 10.3157C9.92357 10.1106 10.1097 9.92446 10.3148 9.76086C10.4393 9.66159 10.5714 9.5752 10.7132 9.50004M14.4992 13.286C14.424 13.4278 14.3376 13.5599 14.2383 13.6844C14.0747 13.8895 13.8886 14.0756 13.6835 14.2392C13.559 14.3385 13.4269 14.4249 13.2851 14.5M9.03008 13C9.01507 13.3054 9.00673 13.6373 9.0021 13.9994C8.99606 14.4721 8.99303 14.7084 9.14232 14.8577C9.29161 15.007 9.52793 15.004 10.0006 14.9979C10.3627 14.9933 10.6946 14.9849 11 14.9699M13 9.03008C13.3054 9.01507 13.6373 9.00673 13.9994 9.0021C14.4721 8.99606 14.7084 8.99303 14.8577 9.14231C15.007 9.29159 15.0039 9.52792 14.9979 10.0006C14.9933 10.3627 14.985 10.6946 14.9699 11'
    }
  ],
  [
    'path',
    {
      d: 'M9 17.4947C9.04098 19.0437 9.19209 19.982 9.74923 20.6807C9.91282 20.8858 10.0989 21.0719 10.3041 21.2355C11.2627 22 12.6726 22 15.4924 22C18.3121 22 19.722 22 20.6807 21.2355C20.8858 21.0719 21.0719 20.8858 21.2355 20.6807C22 19.722 22 18.3121 22 15.4924C22 12.6726 22 11.2627 21.2355 10.3041C21.0719 10.0989 20.8858 9.91283 20.6807 9.74923C19.982 9.19209 19.0437 9.04098 17.4947 9'
    }
  ],
  [
    'path',
    {
      d: 'M15 6.50528C14.959 4.95626 14.8079 4.01796 14.2508 3.31933C14.0872 3.11419 13.9011 2.92808 13.6959 2.76449C12.7373 2 11.3274 2 8.50763 2C5.68785 2 4.27797 2 3.31933 2.76449C3.11419 2.92808 2.92808 3.11419 2.76449 3.31933C2 4.27797 2 5.68785 2 8.50763C2 11.3274 2 12.7373 2.76449 13.6959C2.92808 13.9011 3.11419 14.0872 3.31933 14.2508C4.01796 14.8079 4.95626 14.959 6.50528 15'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

PathfinderExcludeIcon.displayName = 'PathfinderExcludeIcon';
export default PathfinderExcludeIcon;
