import React from 'react';
import config from '../config';

interface JobShareIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name JobShareIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/job-share)
 * @see {@link https://clicons.dev/icon/job-share}
 */
const JobShareIcon = React.forwardRef<SVGSVGElement, JobShareIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11.0065 21.0001H9.60546C6.02021 21.0001 4.22759 21.0001 3.11379 19.8652C2 18.7302 2 16.9035 2 13.2501C2 9.59674 2 7.77004 3.11379 6.63508C4.22759 5.50012 6.02021 5.50012 9.60546 5.50012H13.4082C16.9934 5.50012 18.7861 5.50012 19.8999 6.63508C20.4571 7.20291 20.7356 7.94388 20.8747 9.00012'
    }
  ],
  [
    'path',
    {
      d: 'M19.1581 19.829C19.0569 20.0309 19 20.2588 19 20.5C19 21.3284 19.6716 22 20.5 22C21.3284 22 22 21.3284 22 20.5C22 19.6716 21.3284 19 20.5 19C19.9128 19 19.4043 19.3375 19.1581 19.829ZM19.1581 19.829L15.8419 18.171M19.1581 15.171C19.4043 15.6625 19.9128 16 20.5 16C21.3284 16 22 15.3284 22 14.5C22 13.6716 21.3284 13 20.5 13C19.6716 13 19 13.6716 19 14.5C19 14.7412 19.0569 14.9691 19.1581 15.171ZM19.1581 15.171L15.8419 16.829M15.8419 16.829C15.5957 16.3375 15.0872 16 14.5 16C13.6716 16 13 16.6716 13 17.5C13 18.3284 13.6716 19 14.5 19C15.0872 19 15.5957 18.6625 15.8419 18.171M15.8419 16.829C15.9431 17.0309 16 17.2588 16 17.5C16 17.7412 15.9431 17.9691 15.8419 18.171'
    }
  ],
  [
    'path',
    {
      d: 'M15.9998 5.5L15.9004 5.19094C15.4054 3.65089 15.1579 2.88087 14.5686 2.44043C13.9794 2 13.1967 2 11.6313 2H11.3682C9.8028 2 9.02011 2 8.43087 2.44043C7.84162 2.88087 7.59411 3.65089 7.0991 5.19094L6.99976 5.5'
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

JobShareIcon.displayName = 'JobShareIcon';
export default JobShareIcon;
