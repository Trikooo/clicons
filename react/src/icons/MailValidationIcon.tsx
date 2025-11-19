import React from 'react';
import config from '../config';

interface MailValidationIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MailValidationIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mail-validation)
 * @see {@link https://clicons.dev/icon/mail-validation}
 */
const MailValidationIcon = React.forwardRef<SVGSVGElement, MailValidationIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6.91211 6.83789L9.85413 8.57732C11.5693 9.59141 12.2549 9.59141 13.9701 8.57732L16.9121 6.83789'
    }
  ],
  [
    'path',
    {
      d: 'M14.9121 17.3379C14.9121 17.3379 15.4121 17.3379 15.9121 18.3379C15.9121 18.3379 17.5003 15.8379 18.9121 15.3379'
    }
  ],
  [
    'path',
    {
      d: 'M22 10.3118L21.9589 6.43829C21.9478 4.96285 21.1512 2.01198 18.0539 2.01198H6.10527C4.73685 1.91134 2 2.34718 2 7.1423V14.2514C2.00001 15.472 2.27229 17.115 3.61079 18.1055C4.47577 18.7456 5.61117 18.8049 6.68416 18.858L8.93115 18.9692'
    }
  ],
  [
    'path',
    {
      d: 'M21.9809 16.9588C21.9809 19.7427 19.7346 21.9995 16.9636 21.9995C14.1926 21.9995 11.9463 19.7427 11.9463 16.9588C11.9463 14.1748 14.1926 11.918 16.9636 11.918C19.7346 11.918 21.9809 14.1748 21.9809 16.9588Z'
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

MailValidationIcon.displayName = 'MailValidationIcon';
export default MailValidationIcon;
