import React from 'react';
import config from '../config';

interface StudyLampIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name StudyLampIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/study-lamp)
 * @see {@link https://clicons.dev/icon/study-lamp}
 */
const StudyLampIcon = React.forwardRef<SVGSVGElement, StudyLampIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.5619 9.22239L17.0356 10.15C16.5405 11.0225 16.293 11.4588 15.7539 11.4969C15.2147 11.535 14.9862 11.2231 14.5291 10.5994C14.019 9.90316 13.6959 9.08502 13.5814 8.22954C13.4744 7.43025 13.4209 7.03061 13.2914 6.83438C13.0847 6.52117 12.6695 6.34887 12.3591 6.16651C11.5417 5.68624 11.1329 5.4461 11.0256 5.03847C10.9183 4.63085 11.1542 4.21492 11.6262 3.38306C12.0982 2.5512 12.3342 2.13527 12.7347 2.02604C13.1353 1.91682 13.5441 2.15696 14.3615 2.63723C14.6719 2.81959 15.0262 3.09935 15.3961 3.12486C15.6278 3.14085 15.9947 2.98817 16.7284 2.68281C17.5137 2.35598 18.3715 2.23165 19.2191 2.33314C19.9785 2.42406 20.3582 2.46953 20.5953 2.96369C20.8325 3.45785 20.585 3.89411 20.0899 4.76664L19.5643 5.69311M17.5619 9.22239L17.9961 9.47749C18.9538 10.0402 20.1784 9.70625 20.7314 8.73166C21.2843 7.75708 20.9562 6.51088 19.9985 5.94821L19.5643 5.69311M17.5619 9.22239L19.5643 5.69311'
    }
  ],
  [
    'path',
    {
      d: 'M7 13C7 14.1046 6.10457 15 5 15C3.89543 15 3 14.1046 3 13C3 11.8954 3.89543 11 5 11C6.10457 11 7 11.8954 7 13Z'
    }
  ],
  [
    'path',
    {
      d: 'M6 12L13 7'
    }
  ],
  [
    'path',
    {
      d: 'M7 22H14'
    }
  ],
  [
    'path',
    {
      d: 'M6 15L11 22'
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

StudyLampIcon.displayName = 'StudyLampIcon';
export default StudyLampIcon;
